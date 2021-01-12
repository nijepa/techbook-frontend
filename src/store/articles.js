//import axios from 'axios';
//const URL = process.env.VUE_APP_BACKEND_URL;
// import apiClient from './api_client';
//import router from '../router';


const  state = {
  article: {},
  articles: []
};

/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getAllArticles: state => state.articles,
  getOneArticle: state => state.article
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const  mutations = {
  setArticles: (state, articles) => (state.articles = articles),

  setArticle: (state, article) => (state.article = article),

  clearArticle(state) {
    state.article = {};
  },

/*   addArticle(state, text) {
    state.articles = [text, ...state.expenses]
  },

  updateArticle(state, article) {
    state.articles = [
      ...state.articles.map(item => 
          item._id !== article._id ? item : {...item, ...article}
      )
    ] 
  },

  deleteArticle (state, id) {
    state.articles = [
      ...state.articles.filter((item) => item._id !== id)
    ];
  }, */
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async fetchArticles ({ commit }, langId) {
    //const response = await axios.get(URL + "articles");
    const res = [
      {id: 1, title: 'Page structure', content: 'asfafa', code: '<head>Header</head>', image: 'html5-cheat-sheet.png', lang: 1},
      {id: 2, title: 'Head tags', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 1},
      {id: 3, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 4, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 5, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 6, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 7, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 8, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 9, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 10, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 11, title: 'Redial gradient', content: 'asfafa', code: 'CSS3', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 2},
      {id: 12, title: 'Filter', content: 'Filter', code: 'const canDrink = ages.filter(age => age >= 21);', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 3},
      {id: 13, title: 'Map', content: 'Map', code: "const ageMap = ages\n  .map(age => Math.sqrt(age))\n  .map(age => age * 2);", image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 3},
      {id: 14, title: 'Sort', content: 'Sort', code: 'const sortAges = ages.sort((a, b) => a -b);', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 3},
      {id: 15, title: 'Reduce', content: 'reduce', code: 'const ageSum = ages.reduce((total, age) => total + age, 0);', image: 'CSS-CHEAT-SHEET-p1-2019-update.png', lang: 3},
    ]
    const response = res.filter(a => a.lang === langId)
    commit('setArticles', response);
    //commit('setExpenses', response.data);
  },

  async fetchArticle ({ commit }, articleData) {
    //const response = await axios.get(URL + "articles/" + articleData._id, articleData);
    //commit('setExpense', response.data);
    //console.log(articleData)
    commit('setArticle', articleData);
  },

  /* async articleAdd({commit},articleData) {
    await axios.post(URL + 'expenses', expenseData)
      .then((response) => {
        commit('addExpense', response.data.expense);
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

  async expenseUpdate({commit}, expenseData) {
    await axios.put(URL + 'expenses/' + expenseData._id, expenseData)
      .then((response) => {
        commit('updateExpense', response.data);
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

  async expenseDelete({commit}, expenseData) {
    await axios.delete(URL + 'expenses/' + expenseData._id, expenseData)
      .then((response) => {
        commit('deleteExpense', response.data._id)
      })
      .catch((error) => {
        if (error.response) {
          commit('setErrors', error.response.data.error);
        } else {
          commit('setErrors', error);
        }
      })
  }, */

  async articleClear({commit}) {
    commit('clearArticle');
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};