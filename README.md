# syy1
rebase操作
git rebase 操作
git rebase <分支名称>

## 参考链接：
https://medium.com/free-code-camp/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75

## 步骤：
mkdir react-boilerplate
cd react-boilerplate
npm init

npm install webpack webpack-cli --save-dev
或者
npm install webpack webpack-cli -D


npm install react react-dom --save
或者
npm install react react-dom -S

npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

npm install css-loader style-loader --save-dev

npm install html-webpack-plugin --save-dev

npm install webpack-dev-server --save-dev


babel.config.json:
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
// env: This preset is used to transpile the ES6/ES7/ES8 code to ES5.
// react: This preset is used to transpile JSX code to ES5.



config/webpack.config.dev.js:

# 添加分支 branchSyy1

本地修改分支 localBranchSyy1
