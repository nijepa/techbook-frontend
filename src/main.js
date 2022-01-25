import { createApp } from "vue";
//import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/atom-one-dark.css";
import ClickOutside from "./composables/useClickOutside.js";
//import { getSvg } from './helpers/getSvg'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueHighlightJS)
app.directive("click-outside", ClickOutside)
//app.config.globalProperties.$svg = getSvg
app.mount('#app')
// createApp(App)
//   .use(store)
//   .use(router)
//   .use(VueHighlightJS)
//   .directive("click-outside", ClickOutside)
//   .mount("#app");
