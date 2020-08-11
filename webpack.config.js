const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '/src/components'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'index.js',
    library: 'Xalgo RM Components',
    libraryTarget: 'commonjs2',
    publicPath: '/build/',
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [],
};
