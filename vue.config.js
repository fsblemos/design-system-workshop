const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  chainWebpack: config => {
    config.module.rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.emitError = true;
        return options;
      });
  },
  configureWebpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        src: resolve('src'),
        Vue: 'vue',
        caComponents: '@contaazul/ca-components/dist/ca-components.min'
      }
    }

    if (isProd) {
      config.plugins.push(
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
      )

      /** npm run build --report */
      if (process.env.npm_config_report) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(new BundleAnalyzerPlugin())
      }
    }
  }
};
