const Components = require("unplugin-vue-components/webpack");
module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? '/techbook-frontend/' : '/',
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
};
