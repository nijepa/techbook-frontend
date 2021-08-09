import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import techsModule from "./techs";
import languagesModule from "./languages";
import articlesModule from "./articles";
import globalsModule from "./globals";
import auth from './auth';

export default createStore({
  modules: {
    techsModule,
    languagesModule,
    articlesModule,
    globalsModule,
    auth
  },
  plugins: [createPersistedState()],
});
