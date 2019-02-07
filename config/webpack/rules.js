import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';

module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader']
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'file-loader'
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /node_modules/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: /node_modules/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.(png|svg|jpe?g|gif|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: paths.imagesFolder,
          name: '[name].[hash].[ext]'
        }
      }
    ]
  }
];
