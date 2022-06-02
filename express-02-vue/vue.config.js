const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/api': {         //代理名称,这里最好有一个 
            target: 'http://127.0.0.1:3000',  // 后台接口域名
            changeOrigin: true,  //是否跨域
            pathRewrite:{
                '^/api':''//路径重写
            }
        }
    }
  }
})
