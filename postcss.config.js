module.exports = ({ file }) => ({
  parser: false,
  plugins: {
    "postcss-import": { root: file.dirname },
    "postcss-url": {},
    "postcss-preset-env": {},
  },
});
