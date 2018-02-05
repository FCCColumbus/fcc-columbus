import webpack from "webpack"
import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import FaviconsWebpackPlugin from "favicons-webpack-plugin"
import BrowserSyncPlugin from "browser-sync-webpack-plugin"
import GitRevisionPlugin from "git-revision-webpack-plugin"
import WebpackChunkHash from "webpack-chunk-hash"
import InlineManifestWebpackPlugin from "inline-manifest-webpack-plugin"
import CompressionPlugin from "compression-webpack-plugin"
import autoprefixer from "autoprefixer"
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import packageJson from "./package.json"
import { WDS_PORT, slackAPI } from "./app/config/config"
const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = LAUNCH_COMMAND === "prod:build"
const styles =
  "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader"

process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  app: path.resolve(__dirname, "app"),
  build: path.resolve(__dirname, "dist"),
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${PATHS.app}/index.ejs`,
  filename: "index.html",
  inject: "body",
})

const productionPlugin = new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production"),
  },
})

const BrowserSyncPluginConfig = new BrowserSyncPlugin(
  {
    host: "localhost",
    proxy: `http://localhost:${WDS_PORT}`,
    open: true,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true,
    },
    ghostMode: true, // eslint-disable-line no-dupe-keys
  },
  {
    // plugin options
    reload: false, // prevent BrowserSync from reloading page and let WDS take care of it
  }
)

const base = {
  entry: {
    app: PATHS.app,
    vendor: [
      "core-js/fn/promise",
      ...Object.keys(packageJson.dependencies).filter(
        el => el !== "font-awesome"
      ),
    ],
  },
  output: {
    path: PATHS.build,
    filename: isProduction ? "[name].[chunkhash:8].js" : "[name].js", // use chunkhash if more than one
    chunkFilename: isProduction ? "[name].[chunkhash:8].js" : "[name].js",
    publicPath: "/",
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: isProduction
          ? ExtractTextPlugin.extract({ fallback: "style-loader", use: styles })
          : [
              { loader: "style-loader" },
              {
                loader:
                  "css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
              },
              {
                loader: "postcss-loader",
                options: { plugins: [autoprefixer] },
              },
              { loader: "sass-loader" },
            ],
      },
      {
        test: /\.(eot|ttf|woff|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader?name=fonts/[name].[hash:8].[ext]",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          "file-loader?name=images/[name].[hash:8].[ext]",
          {
            loader: "image-webpack-loader",
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              },
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "app", "public"],
    extensions: [".js", ".jsx"],
  },
}

const developmentConfig = {
  devtool: "cheap-module-inline-source-map",
  devServer: {
    port: WDS_PORT,
    contentBase: `${PATHS.build}/public`,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: slackAPI,
        secure: false,
        changeOrigin: true,
        pathRewrite: { "/api": "" },
      },
      // uncomment if using vagrant
      // watchOptions: {
      //   // Delay the rebuild after the first change
      //   aggregateTimeout: 300,
      //   // Poll using interval (in ms, accepts boolean too)
      //   poll: 1000,
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    BrowserSyncPluginConfig,
    new CopyWebpackPlugin([{ from: "public/" }]),
    // uncomment to view sizes of node_modules.
    //
    // new BundleAnalyzerPlugin({
    //   analyzerHost: 'localhost',
    //   analyzerPort: 3002,
    //   openAnalyzer: true,
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de|en/),
  ],
}

const productionConfig = {
  devtool: "cheap-module-source-map",
  plugins: [
    productionPlugin,
    new FaviconsWebpackPlugin("images/favicon.png"),
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      allChunks: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new InlineManifestWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ["vendor", "manifest"],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoErrorsPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de|en/),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([{ from: "public/" }]),
  ],
}

export default Object.assign(
  {},
  base,
  isProduction === true ? productionConfig : developmentConfig
)
