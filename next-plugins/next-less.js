/* eslint-disable compat/compat */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-object-spread */
const cssLoaderConfig = require("@zeit/next-css/css-loader-config");

const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = (nextConfig = {}) => {
  const retConfig = {}
  Object.assign(retConfig, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      const { dev, isServer } = options;
      const {
        // cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        lessLoaderOptions = {}
      } = nextConfig;

      const baseConfig = {
        extensions: ["less"],
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: "less-loader",
            options: lessLoaderOptions
          }
        ]
      };

      // 添加loader
      options.defaultLoaders.less = cssLoaderConfig(config, {
        ...baseConfig,
        cssModules: false
      });
      options.defaultLoaders.lessModule = cssLoaderConfig(config, {
        ...baseConfig,
        cssModules: true
      });

      config.module.rules.push({
        test: lessRegex,
        exclude: lessModuleRegex,
        use: options.defaultLoaders.less
      });

      config.module.rules.push({
        test: lessModuleRegex,
        use: options.defaultLoaders.lessModule
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
  return retConfig
};
