import { createStore } from 'vuex';
import languagesModule from './languages';
import articlesModule from './articles';

export default createStore({
  modules: {
    languagesModule, articlesModule
  }
})
