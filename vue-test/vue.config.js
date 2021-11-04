module.exports = {
  configureWebpack: {
    externals: {
      robotjs: 'commonjs robotjs'
    },
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}
