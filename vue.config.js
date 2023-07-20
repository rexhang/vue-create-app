const { defineConfig } = require('@vue/cli-service');

const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: './',
  devServer: {
    hot: true,
    port: 8080,
    https: false,
    host: '127.0.0.1',
    allowedHosts: [
      '*'
    ],
    proxy: {
      // 本地开发 请求的时候 都会固定加上模块module标识符 /internal 实际生产中则不需要 注意区分
      '/internal': {
        // 代理服务器地址 在对应的.env.xx文件中配置
        target: process.env.APP_PROXY_HOST,
        pathRewrite: { '^/internal': '' },
        ws: true,
        changeOrigin: true,
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@root': path.join(__dirname, './'),
        '@': path.join(__dirname, './src'),
        '@img': path.join(__dirname, './src/assets/img'),
      }
    }
  }
})
