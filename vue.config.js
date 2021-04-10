module.exports = {
  publicPath: './',
  outputDir: 'dist',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  productionSourceMap: false,
  transpileDependencies: [
    'quasar'
  ],
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // http://localhost:8079/ http://47.102.214.242:8079/
        target: 'https://api.baidu.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^api': ''
        }
      }
    }
  },
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial'
          },
          quasarUI: {
            name: 'chunk-quasar',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?quasar(.*)/
          }
        },
      }
    }
  }
}
