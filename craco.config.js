/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, '@/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@static': path.resolve(__dirname, 'src/static'),
    }
  },
};