

const withLess = require("./next-plugins/next-less");
const withCss = require("@zeit/next-css");
const withImages = require("next-images");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const webpack = require("webpack");
// const Debug = require("debug");
// const log = Debug("config:next-config");

// const isProd = process.env.NODE_ENV === "production";

// function inspect(object, options) {
//   options = Object.assign({ depth: null }, options);
//   return util.inspect(object, options);
// }

let config = {
  // 编译过后的文件夹名称
  distDir: "build",

  // 只有服务器端才有的配置
  serverRuntimeConfig: {
    serverOnly: "secret",
  },

  // 服务器和客户端都有的配置
  publicRuntimeConfig: {
    serverAndClient: "public",
    host: "127.0.0.1:3333",
    // 可以用于 子域名 切换语言
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
    ? process.env.LOCALE_SUBPATHS
    : 'none',
  },

  webpack: config => {
    // DEBUG变量传递到client端，用于debug

    // log("init-webpack-config", inspect(config));

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.DEBUG": JSON.stringify(process.env.DEBUG),
      })
    );

    // log("full-webpack-config", inspect(config));

    return config;
  },

  // 配置CDN
  // crossOrigin: "anonymous",
  // assetPrefix: isProd ? "https://cdn.mydomain.com" : "",
};

config = withLess({
  ...config,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]",
  },
  // postcss配置
  postcssLoaderOptions: {},
});

config = withCss({ ...config });

config = withImages({ ...config });

config = withBundleAnalyzer({
  ...config,
  // analyze
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
});

module.exports = config;
