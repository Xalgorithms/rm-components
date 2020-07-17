const { version } = require('./package.json');
module.exports = {
  title: 'rm-components',
  version,
  components: '../src/components/[A-Z]**/*.js', // index.js
  ignore: ['**/src/test.js'],
  require: ['./src/styles/index.scss'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
const path = require('path')
module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Provider.js')
  }
}
