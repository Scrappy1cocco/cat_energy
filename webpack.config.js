const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve('./src/js'),
    filename: 'bundle.js'
  }
};

