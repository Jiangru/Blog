// vue.config.js
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/blog' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src')
      }
    }
  }
}