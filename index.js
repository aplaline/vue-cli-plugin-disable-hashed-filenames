module.exports = (api, options) => {
  if (!options.pluginOptions.disableHashedFilenames) return

  api.chainWebpack (config => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({}, options, { name: 'img/[name].[ext]' }));
  })

  api.configureWebpack (config => ({
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    }
  }))

  options.css.extract = options.css.extract || {}
  options.css.extract.filename = 'css/[name].css'
  options.css.extract.chunkFilename = 'css/[name].css'
}
