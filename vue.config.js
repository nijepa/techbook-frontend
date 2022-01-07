module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/techbook-frontend/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/global.scss";`
      }
    }
  }
};