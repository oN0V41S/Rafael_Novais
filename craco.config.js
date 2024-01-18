/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@static': path.resolve(__dirname, 'src/static'),
      '@So_on': path.resolve(__dirname, 'src/so_on'),
    }
  },
};