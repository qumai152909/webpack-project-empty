const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css到单独的文件中
const CleanWebpackPlugin = require('clean-webpack-plugin');


const dirConfig = require('./dir.config'); // 路径


// 插件： 自动生成html；并自动引入打包后的js文件
const HtmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.join(dirConfig.srcDir, 'index.html')
});
/*const clearPlugin = new CleanWebpackPlugin(['dist-dev'], {
  root: dirConfig.roots,
});*/


module.exports = {
  mode: 'development', // 开发模式
  devtool: 'cheap-module-eval-source-map', // 此选项控制是否生成，以及如何生成 source map
  entry: { index: './src/index.js' }, // 相对于webpack的context路径
  output: {
    path: dirConfig.distDir, // 必须绝对路径
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx?)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 2000, // // 小于2k的图片自动转成base64格式，并且不会存在实体图片
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }],
      },
      {
        test: /\.(eot|ttf|woff|svg)/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    HtmlPlugin,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
  ],
  optimization: {
    moduleIds: 'hashed', // 怎样计算模块id
    chunkIds: 'named',
    removeEmptyChunks: true,
    mergeDuplicateChunks: true, // 合并含有相同模块的chunks
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: { // 缓存组
        vendor: { // 抽离第三方插件
          test: /node_modules/,
          name: 'vendor', // 打包后的文件名，任意命名
          chunks: 'initial', // 表示从哪些chunks里面抽取代码
          priority: 10, // 缓存组权重
        }
      }
    }
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
