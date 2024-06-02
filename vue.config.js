const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: 'source-map',
  }
})
module.exports = {
  devServer: {
    allowedHosts: "all",
  },
};