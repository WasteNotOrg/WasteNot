const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/transform-runtime',
            ],
          },
        },
      },
      {
        // /\.css$ /,
        test: /\.css$/i,
        // exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    publicPath: '/',
    proxy: {
      '/': 'http://localhost:3000',
    },
    contentBase: path.resolve(__dirname, 'client'),
    historyApiFallback: true,
  },
}