const duration = 3000;

export const state = () => ({
  toast: null,
});

export const getters = {
  toast: (state) => state.toast,
};

export const mutations = {
  ADD_TOAST: (state, payload) => (state.toast = payload),
  RESET_TOAST: (state) => (state.toast = null),
};

export const actions = {
  addToast({ commit }, payload) {
    console.log("NEW TOAST", payload);

    commit("ADD_TOAST", payload);

    setTimeout(() => {
      commit("RESET_TOAST");
    }, duration);
  },
};
