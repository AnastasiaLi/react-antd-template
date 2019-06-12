const {override, fixBabelImports, addLessLoader, addBundleVisualizer, addWebpackPlugin} = require('customize-cra');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#b81c22',
    },
  }),
  addBundleVisualizer({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8880,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'info'
  }, true),
  process.env.NODE_ENV === 'production' && addWebpackPlugin(new ParallelUglifyPlugin({ // 多进程压缩
    cacheDir: '.cache/',
    sourceMap: true,
  })),
  // addWebpackPlugin(new webpack.ProvidePlugin({
  //   React: 'react',
  //   Component: ['react', 'Component'],
  //   connect: ['react-redux', 'connect'],
  // }))
);
