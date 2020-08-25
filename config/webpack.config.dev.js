const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const dirConfig = require('./dir.config'); // 路径


// 插件： 自动生成html；并自动引入打包后的js文件
const htmlPlugin = new htmlWebpackPlugin({
  filename: 'index.html',
  template: path.join(dirConfig.srcDir, 'index.html')
});

module.exports = {
  mode: 'development', // 开发模式
  devtool: 'cheap-module-eval-source-map', // 此选项控制是否生成，以及如何生成 source map
  entry: './src/index.js', // 相对于webpack的context路径
  output: {
    path: dirConfig.distDir, // 必须绝对路径
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [htmlPlugin],
  optimization: {
    moduleIds: 'hashed', // 怎样计算模块id
    chunkIds: 'named',
    removeEmptyChunks: true,
    mergeDuplicateChunks: true, // 合并含有相同模块的chunks
  },
  resolve: { // 在何处、如何查找文件
    modules: [dirConfig.nodeModulesDir, dirConfig.srcDir],
    extensions: ['.js', '.jsx', '.json', '.ts', 'tsx'],
    alias: {}
  },
  stats: { // 精准控制bundle信息的展示
    entrypoints: false,
    chunks: false,
    assets: false,
    modules: false,
    children: false,
  },
  externals: [{
    echats: 'echats', // 禁止打包到bundle
  }]
};
