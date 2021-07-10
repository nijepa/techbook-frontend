import axios from "axios";
const URL = process.env.VUE_APP_BACKEND_URL_LOCAL;
// import apiClient from './api_client';
//import router from '../router';

const state = {
  article: {},
  articles: [],
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getAllArticles: (state) =>
    state.articles.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    ),
  getAllArticlesByGroups: (state) => (group) =>
    state.articles.filter((val) => {
      let menu = state.articles;
      if (group) {
        menu = val.groups.some((g) => g === group);
      }
      return menu;
    }),
  getOneArticle: (state) => state.article,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setArticles: (state, articles) => (state.articles = articles),

  setArticle: (state, article) => (state.article = article),

  clearArticles(state) {
    state.articles = [];
  },

  clearArticle(state) {
    state.article = {};
  },

  addArticle(state, text) {
    state.articles = [text, ...state.articles];
  },

  updateArticle(state, article) {
    state.articles = [
      ...state.articles.map((item) =>
        item._id !== article._id ? item : { ...item, ...article }
      ),
    ];
  },

  deleteArticle(state, id) {
    state.articles = [...state.articles.filter((item) => item._id !== id)];
  },
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async fetchArticles({ commit }, language) {
    const response = await axios.get(URL + "api/v1/articles");
    const articles = response.data.filter((a) => a.lang._id === language);
    commit("setArticles", articles);
  },

  async fetchArticle({ commit }, articleData) {
    const response = await axios.get(
      URL + "api/v1/articles/" + articleData._id,
      articleData
    );
    commit("setArticle", response.data);
  },

  async articleAdd({ commit }, articleData) {
    await axios
      .post(URL + "api/v1/articles", articleData)
      .then((response) => {
        commit("addArticle", response.data);
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

  async articleUpdate({ commit }, articleData) {
    await axios
      .patch(URL + "api/v1/articles/" + articleData._id, articleData)
      .then((response) => {
        commit("updateArticle", response.data);
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

  async articleDelete({ commit }, articleData) {
    await axios
      .delete(URL + "api/v1/articles/" + articleData._id, articleData)
      .then((response) => {
        commit("deleteArticle", response.data._id);
      })
      .catch((error) => {
        if (error.response) {
          commit("setErrors", error.response.data.error);
        } else {
          commit("setErrors", error);
        }
      });
  },

  articlesClear({ commit }) {
    commit("clearArticles");
  },

  async articleClear({ commit }) {
    commit("clearArticle");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
