const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",
  devServer: {
    proxy: {
      '/api': {
        // '/api' 로 들어오면 포트 8085(스프링 서버)로 보낸다
        target: 'http://localhost:8085',
        changeOrigin: true // cross origin 허용
      }
    }
  }
})
