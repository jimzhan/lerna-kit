const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = (config, env) => {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
    /* ------- Override Gloabal Ant Styles ---------- */
    },
  })(config, env);

  return config
}