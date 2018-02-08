import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import WebpackChunkHash from 'webpack-chunk-hash'
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import autoprefixer from 'autoprefixer'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import HappyPack from 'happypack'
import WebpackBuildNotifierPlugin from 'webpack-build-notifier'
// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

import { WDS_PORT } from './app/config/config'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = LAUNCH_COMMAND === 'build'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'dist'),
}

const devStyles = [
  'style-loader',
  'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
  'sass-loader',
]

const prodStyles = [
  'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
  { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
  'sass-loader',
]

const stylelintConfig = new StyleLintPlugin({
  fix: false,
  cache: true,
  context: 'app/sharedStyles/',
})

const happyThreadPool = HappyPack.ThreadPool({ size: 5 })
const happyPackInstances = [
  new HappyPack({
    threadPool: happyThreadPool,
    id: 'js',
    loaders: [
      'babel-loader?cacheDirectory',
      {
        loader: 'eslint-loader', // webpack will hit esliint-loader first (reverse index order) - use `pre` if you are shady of loaders order - @JW
        options: {
          fix: true,
          cache: true,
          failOnWarning: false,
          failOnError: false,
        },
      },
    ],
  }),
  new HappyPack({
    threadPool: happyThreadPool,
    id: 'css',
    loaders: isProduction ? ['css-loader'] : ['style-loader', 'css-loader'],
  }),
  new HappyPack({
    threadPool: happyThreadPool,
    id: 'assets',
    loaders: ['file-loader?hash=sha512&digest=hex&name=images/[name].[hash:8].[ext]'],
  }),
]

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${PATHS.app}/index.ejs`,
  filename: 'index.html',
  inject: 'body',
})

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
})

const BrowserSyncPluginConfig = new BrowserSyncPlugin(
  {
    host: 'localhost',
    proxy: `http://localhost:${WDS_PORT}`,
    open: true,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true,
    },
    ghostMode: true, // eslint-disable-line no-dupe-keys
    notify: false,
  },
  {
    // plugin options
    reload: false, // prevent BrowserSync from reloading page and let WDS take care of it
  },
)

// const bundlerConfig = new BundleAnalyzerPlugin({
//   analyzerHost: "localhost",
//   analyzerPort: 3002,
//   openAnalyzer: false,
// })

const base = {
  entry: {
    app: PATHS.app,
    vendor: [
      'core-js/fn/string/includes',
      'core-js/fn/object',
      'axios',
      'react',
      'react-dom',
      'react-router',
      'immutable',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    path: PATHS.build,
    filename: isProduction ? '[name].[chunkhash:8].js' : '[name].js', // use chunkhash if more than one
    chunkFilename: isProduction ? '[name].[chunkhash:8].js' : '[name].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['happypack/loader?id=js'],
      },
      {
        test: /\.css$/, // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/159
        loaders: isProduction
          ? ExtractTextPlugin.extract({ use: ['happypack/loader?id=css'] })
          : ['happypack/loader?id=css'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: isProduction
          ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: prodStyles })
          : ['happypack/loader?id=scss'],
      },
      {
        test: /\.(eot|ttf|woff|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loaders: [`file-loader?name=fonts/[name]${isProduction ? '.[hash:8]' : ''}.[ext]`],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: ['happypack/loader?id=assets'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'app', 'public'],
    extensions: ['.js', '.jsx'],
  },
}

const developmentConfig = {
  cache: true,
  devtool: 'inline-eval-cheap-source-map',
  devServer: {
    port: WDS_PORT,
    contentBase: `${PATHS.build}/public`,
    historyApiFallback: true,
    stats: 'errors-only',
    hot: true,
    inline: true,
    overlay: {
      errors: true,
      warnings: false,
    },
    proxy: {
      '/api': {
        target: '',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '/api': '' },
      },
    },
  },
  plugins: [
    ...happyPackInstances,
    new HappyPack({
      threadPool: happyThreadPool,
      id: 'scss',
      loaders: isProduction ? prodStyles : devStyles,
    }),
    HtmlWebpackPluginConfig,
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([{ from: 'public/' }]),
    stylelintConfig,
    new webpack.HotModuleReplacementPlugin(),
    BrowserSyncPluginConfig,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    ...happyPackInstances,
    productionPlugin,
    new ExtractTextPlugin({
      filename: 'styles.[contenthash].css',
      allChunks: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new InlineManifestWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de|en/),
    new FaviconsWebpackPlugin('./public/images/favicon.png'),
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
    HtmlWebpackPluginConfig,
    new CopyWebpackPlugin([{ from: 'public/' }]),
    stylelintConfig,
    // bundlerConfig(),
    new WebpackBuildNotifierPlugin({
      title: 'FCC Columbus',
      logo: path.resolve('./public/images/fccc-logo.png'),
      suppressSuccess: true,
    }),
  ],
}

export default Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig)
