import axios from "axios";
const URL = process.env.VUE_APP_BACKEND_URL_LOCAL;
// import apiClient from './api_client';
//import router from '../router';

const state = {
  language: {},
  languages: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getAllLanguages: (state) => state.languages,
  getOneLanguage: (state) => state.language,
  getLanguagesByTechs: (state) => (tech) =>
    state.languages.data.filter((val) => {
      return val.tech._id === tech._id
/*       let menu = state.languages.data;
      if (tech) {
        menu = val.tech.some((g) => g._id === tech._id);
      }
      return menu; */
    }),
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setLanguages: (state, languages) => (state.languages = languages),

  setLanguage: (state, language) => (state.language = language),

  clearLanguage(state) {
    state.language = {};
  },

  addLanguage(state, text) {
    state.languages = [text, ...state.languages];
  },

  updateLanguage(state, language) {
    state.languages = [
      ...state.languages.map((item) =>
        item._id !== language._id ? item : { ...item, ...language }
      ),
    ];
  },

  deleteLanguage(state, id) {
    state.languages = [...state.languages.filter((item) => item._id !== id)];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async fetchLanguages({ commit }) {
    const response = await axios.get(URL + "api/v1/langs");
    commit("setLanguages", response);
  },

  async fetchLanguage({ commit }, languageData) {
    const response = await axios.get(
      URL + "api/v1/langs/" + languageData._id,
      languageData
    );
    commit("setLanguage", response.data);
    console.log(languageData)
  },

  async languageAdd({ commit }, languageData) {
    await axios
      .post(URL + "api/v1/langs", languageData)
      .then((response) => {
        commit("addLanguage", response.data);
        //router.push("/dashboard")
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async languageUpdate({ commit }, languageData) {
    await axios
      .put(URL + "api/v1/langs/" + languageData._id, languageData)
      .then((response) => {
        commit("updateLanguage", response.data);
        //router.push("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async languageDelete({ commit }, languageData) {
    await axios
      .delete(URL + "api/v1/langs/" + languageData._id, languageData)
      .then((response) => {
        commit("deleteLanguage", response.data._id);
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async languageClear({ commit }) {
    commit("clearLanguage");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
