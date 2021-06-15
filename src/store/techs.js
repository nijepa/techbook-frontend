import axios from "axios";
const URL = process.env.VUE_APP_BACKEND_URL_LOCAL;
// import apiClient from './api_client';
//import router from '../router';

const state = {
  techs: [],
  tech: {},
  errors: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getTechs: (state) => state.techs,
  getTech: (state) => state.tech,
  getErrors: (state) => state.errors,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setTechs: (state, techs) => (state.techs = techs),

  setTech: (state, tech) => (state.tech = tech),

  clearTech(state) {
    state.tech = {};
  },

  addTech(state, text) {
    state.techs = [text, ...state.techs];
  },

  updateTech(state, tech) {
    state.techs = [
      ...state.techs.map((item) =>
        item._id !== tech._id ? item : { ...item, ...tech }
      ),
    ];
  },

  deleteTech(state, id) {
    state.techs = [...state.techs.filter((item) => item._id !== id)];
  },

  setErrors(state, errors) {
    state.errors = errors;
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async fetchTechs({ commit }) {
    const response = await axios.get(URL + "api/v1/techs");
    commit("setTechs", response);
  },

  async fetchTech({ commit }, techData) {
    const response = await axios.get(
      URL + "api/v1/techs/" + techData._id,
      techData
    );
    commit("setTech", response.data);
  },

  async techAdd({ commit }, techData) {
    await axios
      .post(URL + "api/v1/techs", techData)
      .then((response) => {
        commit("addTech", response.data);
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

  async techUpdate({ commit }, techData) {
    await axios
      .put(URL + "api/v1/techs/" + techData._id, techData)
      .then((response) => {
        commit("updateTech", response.data);
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

  async techDelete({ commit }, techData) {
    await axios
      .delete(URL + "api/v1/techs/" + techData._id, techData)
      .then((response) => {
        commit("deleteTech", response.data._id);
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  async techClear({ commit }) {
    commit("clearTech");
  },

  clearErrors({ commit }) {
    commit('setErrors', []);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
