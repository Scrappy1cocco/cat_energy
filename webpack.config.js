const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/app.js',
  output: {
    path: path.resolve('./src/js'),
    filename: 'bundle.js'
  }
};

