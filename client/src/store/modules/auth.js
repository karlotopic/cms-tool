export default {
  namespaced: true,
  state: {
    accessToken: "",
  },

  mutations: {
    LOGIN_SUCCESS(state, token) {
      state.accessToken = token;
    },
  },
};
