const path = require('path');

module.exports = {
  mode           : 'production',
  entry          : './index.js',
  output         : {
    filename       : 'circle-assign.min.js',
    path           : path.resolve(__dirname, 'dist')
  }
};
