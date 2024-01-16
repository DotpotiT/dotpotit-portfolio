module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  plugins: {
    "postcss-nesting": {}, // Add this line
    tailwindcss: {},
    autoprefixer: {},
  },
};
