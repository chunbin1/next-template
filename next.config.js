/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const webpack = require('webpack');
const withLess = require('./next-plugins/next-less');

let config = {
  // 编译过后的文件夹名称
  distDir: 'build',

  // 只有服务器端才有的配置
  serverRuntimeConfig: {
    serverOnly: 'secret',
  },

  // 服务器和客户端都有的配置
  publicRuntimeConfig: {
    serverAndClient: 'public',
    host: '127.0.0.1:3333',
    // 可以用于 子域名 切换语言
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },

  webpack: (webpackConifg, { isServer }) => {
    webpackConifg.resolve.alias['@'] = path.join(__dirname, '');

    webpackConifg.plugins.push(
      new webpack.DefinePlugin({
        'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
      }),
    );

    // 服务端antd样式
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...webpackConifg.externals];
      webpackConifg.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      webpackConifg.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }

    return webpackConifg;
  },
};

config = withLess({
  ...config,
  // 修复less打包问题
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]_[hash:base64:5]',
  },
  // postcss配置
  postcssLoaderOptions: {},
});

config = withCss({ ...config });

config = withImages({ ...config });

config = withBundleAnalyzer({
  ...config,
  // analyze
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
});

module.exports = config;
