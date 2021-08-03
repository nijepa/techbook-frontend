const state = {
  loading: null,
};
/* -------------------------------------- GETTERS -------------------------------------- */
const getters = {
  getLoading: (state) => state.loading,
};

/* -------------------------------------- MUTATIONS -------------------------------------- */
const mutations = {
  setLoading: (state, loading) => (state.loading = loading),
};

/* -------------------------------------- ACTIONS -------------------------------------- */
const actions = {
  async changeLoading({ commit }, status) {
    commit("setLoading", status);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
