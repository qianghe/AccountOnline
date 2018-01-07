const webpack = require('webpack');
const base = require('./webpack.base.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config').build;
const path = require('path');

module.exports = merge(base, {
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 8088,
    historyApiFallback: true,
    disableHostCheck: true,
    inline: true, // 实时刷新
    hot: true, // 使用热加载插件 HotModuleReplacementPlugin
    contentBase: config.lib.from
  },
  plugins: [
    //将打包文件插入到模板index页面中
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../views/devTemplate.html'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'develop'"
      }
    }),
  ],
})
