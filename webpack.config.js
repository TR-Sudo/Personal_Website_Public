const {
    DefinePlugin,
    IgnorePlugin
  } = require('webpack');
  
  module.exports = {
    plugins: [
      new DefinePlugin({
        'process.env.EXCLUDE_FROM_BUILD': JSON.stringify(process.env.EXCLUDE_FROM_BUILD)
      }),
      new IgnorePlugin({
        checkResource: resource => process.env.EXCLUDE_FROM_BUILD && new RegExp(process.env.EXCLUDE_FROM_BUILD).test(resource)
      })
    ],
  };