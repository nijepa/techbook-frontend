import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import ClickOutside from './composables/useClickOutside.js'

createApp(App).use(store).use(router).use(VueHighlightJS).directive('click-outside', ClickOutside).mount('#app')
