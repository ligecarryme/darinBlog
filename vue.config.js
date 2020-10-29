module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  devServer: {
    proxy: {
      '/api':{
        target: 'http://localhost:8079',
        ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^api': ''
        }
      }
    }
  },
}
