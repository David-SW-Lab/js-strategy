const path = require('path');

const sourcePath = path.resolve(__dirname, './src');

module.exports = env => ({
  mode: 'development',
  entry: path.join(sourcePath, 'initialize.js'),
  output: {
    filename: 'Strategy.js'
  },
  module: {
    rules: [
      {
        include: sourcePath,
        exclude: ['/node_modules']
      }
    ]
  },
  target: 'node',
  resolve: {
    modules: [sourcePath, 'node_modules'],
    extensions: ['.json', '.js']
  }
});
