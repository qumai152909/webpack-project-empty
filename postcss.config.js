module.exports = {
  parser: 'postcss',
  plugins: {
    'autoprefixer': {},
    'precss': {}, // precss囊括了许多插件来支持类似 Sass 的特性，比如 CSS 变量，套嵌，mixins 等。
  }
};
