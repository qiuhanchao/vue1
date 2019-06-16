const path = require('path');

// 导入在内存中生成 html-webpack-plugin页面的插件
// 这个插件的两个作用：
//  1. 自动在内存中根据指定页面生成一个内存的页面
//  2. 自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个 配置对象
module.exports = {
  entry: './src/main.js', // 入口，表示，要使用 webpack 打包哪个文件
  output: { // 输出文件相关的配置
    path: path.resolve(__dirname, 'dist'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  plugins: [
    new htmlWebpackPlugin({ // 创建一个在内存中生成html-webpack-plugin页面的插件
      template: path.resolve(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: 'index.html' // 指定生成的页面的名称
    }),
    new VueLoaderPlugin()
  ],
  module: { // 这个节点，用于配置所有的第三方模块 加载器 
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置处理 .css 文件的第三方loader 规则
      { test: /\.(jpg|png|gif|bmp|jpeg|svg)$/, use: 'url-loader' }, //处理图片路径规则
      { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
      { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }, // 配置 Babel 来转换高级的ES语法
      { test:/\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的loader
    ] 
  },
  resolve: {
    alias: { // 修改 Vue 被导入时候的包的路径
      // "vue$": "vue/dist/vue.js"
    }
  }
};