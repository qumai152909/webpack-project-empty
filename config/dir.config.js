const path = require('path');

const roots = path.join(__dirname, '../'); // .../webpack-project-empty/
const srcDir = path.join(roots, './src'); // .../webpack-project-empty/src
const distDir = path.join(roots, 'dist'); // 开发模式，打包后的文件，存放位置
const nodeModulesDir = path.join(roots, 'node_modules');

module.exports = {
  roots,
  srcDir,
  distDir,
  nodeModulesDir
};
