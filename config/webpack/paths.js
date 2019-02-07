import path from 'path';

module.exports = {
  root: path.resolve(__dirname, '../', '../'),
  outputPath: path.resolve(__dirname, '../', '../', 'build'),
  entryPath: path.resolve(__dirname, '../', '../', 'src/index.js'),
  templatePath: path.resolve(__dirname, '../', '../', 'public/index.html'),
  serviceWorkerPath: path.resolve(__dirname, '../', '../', './public/assets/service-worker.js'),
  manifestPath: path.resolve(__dirname, '../', '../', 'public/assets/manifest.json'),
  iconPath: path.resolve(__dirname, '../', '../', 'public/assets/images/icon.png'),
  imagesFolder: 'images',
  // fontsFolder: 'fonts',
  // cssFolder: 'css',
  jsFolder: 'js'
};
