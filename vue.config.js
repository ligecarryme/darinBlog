const { config } = require("vue/types/umd");

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
    chainWebpack: config => {
        config.module
            .rule('image')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit:10240}))
    }
}
