module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    'postcss-import': { root: file.dirname },
    'postcss-url': {},
    'postcss-preset-env': {},
  }
});
