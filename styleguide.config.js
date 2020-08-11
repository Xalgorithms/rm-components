const path = require('path');
const { version } = require('./package.json');

module.exports = {
  title: 'rm-components',
  version,
  exampleMode: 'expand',
  components: '../src/components/[A-Z]**/*.js', // index.js
  // ignore: ['**/src/test.js'],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx|mjs)?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  require: [path.join(__dirname, 'styleguide.setup.js')],
  updateExample(props, exampleFilePath) {
    const { settings, lang } = props;
    if (settings && typeof settings.file === 'string') {
      const filepath = path.resolve(path.dirname(exampleFilePath), settings.file);
      const { file, ...restSettings } = settings;
      const rawContent = fs.readFileSync(filepath, 'utf8');
      const content =
        filepath.endsWith('.md') && lang === 'jsx' ? markdownToCodeExample(rawContent) : rawContent;
      return {
        content,
        settings: restSettings,
        lang,
      };
    }
    return props;
  },
  components: 'src/components/**/*.js*',
  assetsDir: 'static',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Provider.js'),
  },
};
