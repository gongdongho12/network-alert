const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const pathGenerator = (pathString) => path.join(__dirname, pathString);

const tsConfigPath = pathGenerator('./tsconfig.json');

const webpackConfig = {
  entry: './src/index.ts',
  output: {
    path: pathGenerator('/build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true,
        },
      },
      {
        test: /[\.js]$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    modules: [pathGenerator('.'), 'node_modules'],
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin({
      configFile: tsConfigPath,
    })],
  },
  externals: [nodeExternals()],
  target: 'node',
  mode: 'development',
};

module.exports = webpackConfig;