const withReactSvg = require('next-react-svg');
const path = require('path');

const API_URL = './api';

module.exports = withReactSvg({
  env: {
    API_URL,
    IMAGES_URL: '/static/images/',
  },
  include: path.resolve(__dirname, 'assets/svg'),
  webpack(config, options) {
    return config;
  },
});
