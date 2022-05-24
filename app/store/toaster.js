export const state = () => ({
  toast: null,
});

export const mutations = {
  ADD_TOAST: (state, payload) => (state.toast = payload),
  RESET_TOAST: (state) => (state.toast = null),
};

export const actions = {
  addToast({ commit, dispatch }, payload) {
    commit("ADD_TOAST", payload);

    setTimeout(() => {
      dispatch("resetToast");
    }, 4000);
  },
  resetToast({ commit }) {
    commit("RESET_TOAST");
  },
};
