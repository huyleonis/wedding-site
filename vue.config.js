const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: resolve('build'),
  // disable source map on production
  productionSourceMap: false,
  lintOnSave: false,
  // For local development
  devServer: {
    proxy: {
      '/api/notification' : {
        target: 'http://localhost:8280',
      },
      '/api' : {
        target: 'http://localhost:8880'
      },
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': 'darkorange',
            'link-color': '#2F80ED',
            'text-color': '#FFFFFF',
            'font-family': '"Montserrat", "Arial", serif'
          },
          javascriptEnabled: true
        }
      }
    }
  },

  // plugins: [
  //   AutoImport.default({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  //   Components.default({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  // ],
  configureWebpack: config => {

    config.plugins.push(
      AutoImport.default({
        resolvers: [ElementPlusResolver()],
      }),
      Components.default({
        resolvers: [ElementPlusResolver()],
      }),
    )

    // Skip on development
    if (process.env.NODE_ENV === 'development') return

    // Remove the ForkTsCheckerWebpackPlugin
    config.plugins = config.plugins.filter(
      p => p.constructor.name !== 'ForkTsCheckerWebpackPlugin'
    )
  }
})
