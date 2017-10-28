import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import GitRevisionPlugin from 'git-revision-webpack-plugin'
import autoprefixer from 'autoprefixer'

import { WDS_PORT } from './app/config/config'
const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProduction = LAUNCH_COMMAND === 'prod:build'
const styles = 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader'

process.env.BABEL_ENV = LAUNCH_COMMAND

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'dist'),
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${PATHS.app}/index.html`,
  filename: 'index.html',
  inject: 'body',
})

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
})

const BrowserSyncPluginConfig = new BrowserSyncPlugin({
  host: 'localhost',
  proxy: `http://localhost:${WDS_PORT}`,
  logPrefix: 'FreeCodeCamp Columbus',
  open: false,
  ghostMode: true,
}, {
  // plugin options
  reload: false, // prevent BrowserSync from reloading page and let WDS take care of it
})

const base = {
  entry: [
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: isProduction
          ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: styles })
          : [
              { loader: 'style-loader' },
              { loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]' },
              { loader: 'postcss-loader', options: { plugins: [ autoprefixer ] } },
              { loader: 'sass-loader' },
            ],
      },
      { test: /\.(eot|ttf|woff|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[name].[ext]', {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
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
    modules: ['node_modules', 'app', 'public'],
    extensions: ['.js', '.jsx'],
  },
}

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    port: WDS_PORT,
    contentBase: `${PATHS.build}/public`,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    BrowserSyncPluginConfig,
    new CopyWebpackPlugin([{ from: './public/' }]),

  ],
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    productionPlugin,
    new FaviconsWebpackPlugin('images/favicon.png'),
    new CopyWebpackPlugin([{ from: './public/' }]),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
}

export default Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig)
