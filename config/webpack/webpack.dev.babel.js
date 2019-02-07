import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js'
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 450000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  devtool: 'inline-source-map'
};
