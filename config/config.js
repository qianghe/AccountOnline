var path = require('path');
var config = {
  dev: {
    publicPath: '/',
    publicStaticSub: 'static'
  },
  build: {
    publicPath: '',
    publicStaticSub: 'static',
    staticDir: path.join(__dirname, '../dist'),
    lib: {
      from: path.resolve(__dirname, "../externals"),
      to: path.join(__dirname, '../dist/static')
    }
  }
}

module.exports =  config;
