import paths from './paths';
import rules from './rules';
import plugins from './plugins';

module.exports = {
  entry: paths.entryPath,
  module: {
    rules
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css']
  },
  plugins
};
