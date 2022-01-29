const Components = require("unplugin-vue-components/webpack");
module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? '/techbook-frontend/' : '/',
  // runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      Components({
        dirs: ["src/components"],
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/global.scss";`,
      },
    },
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .tap(options => {
  //       options.compilerOptions = {
  //         ...options.compilerOptions,
  //         isCustomElement: tag => tag.startsWith('Def')
  //       }
  //       return options
  //     })
  // }
};
