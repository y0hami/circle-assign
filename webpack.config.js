const path = require('path');

module.exports = {
  mode           : 'production',
  entry          : './src/index.js',
  output         : {
    filename       : 'circle-assign.min.js',
    path           : __dirname + '/dist/'
  },
  module:{
    rules : [
      {
        test: /\.js$/,
        include: [
          __dirname + '/src/'
        ],
        loader: 'babel-loader',
        options: {
          presets: [ 'babel-preset-env' ]
        }
      }
    ]
  }
};
