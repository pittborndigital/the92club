// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  const baseConfig = storybookBaseConfig
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // override the module resolving, since we use our own environment variables
  if (configType === 'DEVELOPMENT') {
    baseConfig.resolve.modules = require('react-scripts/config/webpack.config.dev.js').resolve.modules
  } else {
    baseConfig.resolve.modules = require('react-scripts/config/webpack.config.prod.js').resolve.modules
  }

  // Return the altered config
  return baseConfig
}
