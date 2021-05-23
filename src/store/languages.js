import axios from 'axios';
const URL = process.env.VUE_APP_BACKEND_URL_LOCAL;
// import apiClient from './api_client';
//import router from '../router';


const state = {
  language: {},
  languages: [],
  techs: [],
  tech: {}
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getAllLanguages: state => state.languages,
  getOneLanguage: state => state.language,
  getTechs: state => state.techs,
  getTech: state => state.tech
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setTechs: (state, techs) => (state.techs = techs),

  setTech: (state, tech) => (state.tech = tech),

  clearTech(state) {
    state.tech = {};
  },

  setLanguages: (state, languages) => (state.languages = languages),

  setLanguage: (state, language) => (state.language = language),

  clearLanguage(state) {
    state.language = {};
  },

  addLanguage(state, text) {
    state.languages = [text, ...state.languages]
  },

  updateLanguage(state, language) {
    state.languages = [
      ...state.languages.map(item => 
          item._id !== language._id ? item : {...item, ...language}
      )
    ] 
  },

  deleteLanguage (state, id) {
    state.languages = [
      ...state.languages.filter((item) => item._id !== id)
    ];
  }, 
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async fetchTechs ({ commit }) {
    const response = await axios.get(URL + "api/v1/techs");
/*     const response = [
      {id: 1, name: 'Front End', img: 'front-end'},
      {id: 2, name: 'Back End', img: 'back-end'},
      {id: 3, name: 'Databases', img: 'databases'},
      {id: 4, name: 'Utilities', img: 'utilities'},
    ] */
    commit('setTechs', response);
    //commit('setExpenses', response.data);
  },
  async fetchTech ({ commit }, techData) {
    const response = await axios.get(URL + "api/v1/techs/" + techData._id, techData);
    //commit('setExpense', response.data);
    commit('setTech', response.data);
  },
  async fetchLanguages ({ commit }) {
    const response = await axios.get(URL + "api/v1/langs");
/*     const response = [
      {id: 1, name: 'HTML', logo: 'HTML5', tech_id: 1},
      {id: 2, name: 'CSS', logo: 'CSS3', tech_id: 1},
      {id: 3, name: 'Sass', logo: 'Sass', tech_id: 1},
      {id: 4, name: 'JavaScript', logo: 'JavaScript', tech_id: 1},
      {id: 5, name: 'Vue.js', logo: 'Vue.js', tech_id: 1},
      {id: 6, name: 'Node.js', logo: 'Node.js', tech_id: 2},
      {id: 7, name: 'PHP', logo: 'PHP', tech_id: 2},
      {id: 8, name: 'Laravel', logo: 'Laravel', tech_id: 2},
      {id: 9, name: 'MongoDB', logo: 'Mongodb', tech_id: 3},
      {id: 10, name: 'Git', logo: 'Git', tech_id: 4},
      {id: 11, name: 'Npm', logo: 'Npm', tech_id: 4},
      {id: 12, name: 'Algorithms', logo: 'Algorithm', tech_id: 4},
      {id: 13, name: 'MySQL', logo: 'mysql', tech_id: 3},
      {id: 14, name: 'Firebase', logo: 'Firebase', tech_id: 3},
      {id: 15, name: 'Data Structures', logo: 'Tree-data-structure', tech_id: 4},
    ] */
    commit('setLanguages', response);
    //commit('setExpenses', response.data);
  },

  async fetchLanguage ({ commit }, languageData) {
    const response = await axios.get(URL + "api/v1/langs/" + languageData._id, languageData);
    //commit('setExpense', response.data);
    //const response = languageData
    commit('setLanguage', response.data);
  },

  async languageAdd({commit}, languageData) {
    await axios.post(URL + 'api/v1/langs', languageData)
      .then((response) => {
        commit('addLanguage', response.data);
        //router.push("/dashboard")
      })
      .catch((error) => {
        if (error.response) {
          commit('setErrors', error.response.data.error);
        } else {
          commit('setErrors', error);
        }
      })
  },

  async languageUpdate({commit}, languageData) {
    await axios.put(URL + 'api/v1/langs/' + languageData._id, languageData)
      .then((response) => {
        commit('updateLanguage', response.data);
        //router.push("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          commit('setErrors', error.response.data.error);
        } else {
          commit('setErrors', error);
        }
      })
  },

  async languageDelete({commit}, languageData) {
    await axios.delete(URL + 'api/v1/langs/' + languageData._id, languageData)
      .then((response) => {
        commit('deleteLanguage', response.data._id)
      })
      .catch((error) => {
        if (error.response) {
          commit('setErrors', error.response.data.error);
        } else {
          commit('setErrors', error);
        }
      })
  },

  async languageClear({commit}) {
    commit('clearLanguage');
  },

  async techClear({commit}) {
    commit('clearTech');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};