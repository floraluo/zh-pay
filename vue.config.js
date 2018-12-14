const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 9090,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    // proxy: '<url>',
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // },
    before: app => {}
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      // .tap(options => Object.assign(options, { limit: 10240 }))
      .tap(options => Object.assign(options, { limit: 3000 }))
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      }
    },
    plugins: [
      new SpritesmithPlugin({
        //设置源icons,即icon的路径，必选项
        src: {
          cwd: path.resolve(__dirname, 'src/assets/img/icons'),
          glob: '*.png'
        },
        //设置导出的sprite图及对应的样式文件，必选项
        target: {
          image: path.resolve(__dirname, 'src/assets/img/sprite.png'),
          // css: path.resolve(__dirname, '../static/css/sprite.css')  //也可以为css, sass文件，需要先安装相关loader
          css: path.resolve(__dirname, 'src/sass/sprite.scss')  //也可以为css, sass文件，需要先安装相关loader
        },
        //设置sprite.png的引用格式
        apiOptions: {
          generateSpriteName: (path) => {
            let fileName = path.split('icon-')[1].split('.')[0]
            return 's-icon-'+fileName
          },
          cssImageRef: '../assets/img/sprite.png'  //cssImageRef为必选项
        },
        //配置spritesmith选项，非必选
        spritesmithOptions: {
          algorithm: 'top-down'//设置图标的排列方式
        }
      })
    ]
  }
}