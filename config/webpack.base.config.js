const webapck = require('webpack');
const path = require('path');
const config = require('./config');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

//判断是否为开发环境
const isProduct = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'testEnv';
//连接相对路径
const joinPath = relativePath => {
  return relativePath ? path.resolve(__dirname, `.././${relativePath}`) : '';
}
const getPath = (_path) => {
  var publicStaticSub = isProduct ? config.build.publicStaticSub : config.dev.publicStaticSub;
  return path.posix.join(publicStaticSub, _path);
}
module.exports = {
  entry: {
    app: "./src/app",
  },
  output: {
    path: config.build.staticDir,
    filename: isProduct ? getPath('[name].[chunkhash:8].js') : getPath('[name].js'),
    publicPath: isProduct ? config.build.publicPath : config.dev.publicPath,
    chunkFilename : isProduct ? getPath('[id].[chunkhash:7].js') : getPath('[id].js')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      joinPath('src'),
      'node_modules'
    ],
    alias:{
      '@src': path.resolve(__dirname, '../src'),
      '@container': path.resolve(__dirname, '../src/container'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@redux': path.resolve(__dirname, '../src/redux'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@lib': path.resolve(__dirname, '../src/lib'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)|(jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        include: joinPath('src'),
        use: {
          loader: 'eslint-loader',
        }
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: false,
          },
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isProduct,
              }
            },
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|je?pg|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            name: 'static/[name].[hash].[ext]',
            limit: 1000,
          }
        }
      }
    ]
  },
  plugins: [
    // css文件抽取后打包
    new ExtractTextPlugin({
      filename: isProduct ? 'static/[name].[contenthash].css' : 'static/[name].css'
    })
  ]
}
