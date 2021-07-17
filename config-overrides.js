/* config-overrides.js */
const path = require('path')

const aliasForWeb = ([folder]) => path.resolve(`./src/.web-aliases/${folder}`)

module.exports = function override(config, env) {
  const isDevelopment = env === 'development'

  const aliases = {
    'react-native': aliasForWeb`react-native`,
  }

  Object.assign(config.resolve.alias, aliases)

  config.resolve.plugins = config.resolve.plugins.filter((plugin) => plugin.constructor.name !== 'ModuleScopePlugin')

  config.module.rules.push({
    test: /\.(js|tsx|jsx|ts?)$/,
    use: {
      loader: 'babel-loader',
    },
  })

  return config
}
