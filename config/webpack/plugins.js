import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import paths from './paths';

module.exports = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: paths.templatePath,
    minify: {
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      preserveLineBreaks: true,
      minifyURLs: true,
      removeComments: true,
      removeAttributeQuotes: true
    }
  }),
  new ManifestPlugin({
    fileName: 'asset-manifest.json'
  }),
  new InjectManifest({
    swSrc: paths.serviceWorkerPath,
    swDest: 'service-worker.js',
    exclude: '/node_modules'
  }),
  new CopyWebpackPlugin([{ from: paths.iconPath, to: paths.imagesFolder }, paths.manifestPath])
];
