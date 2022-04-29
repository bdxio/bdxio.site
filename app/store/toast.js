import { generateSetters } from '~/utils/storeUtils';

export const state = () => ({
  toasts: [],
});

export const mutations = {
  ...generateSetters(state()),
};

export const actions = {
  addToast({ state, commit }, payload) {
    const message = payload.message || payload;
    let type = payload.type || 'default';
    const duration = payload.duration || 3000;
    const currentStamp = Date.now();

    commit('setToasts', [
        ...state.toasts,
        {
            timestamp: currentStamp,
            message,
            type,
        }
    ]);
    setTimeout(() => {
        const toasts = [...state.toasts];
        const indexToDelete = toasts.findIndex(({timestamp}) => timestamp === currentStamp);
        if (indexToDelete > -1) {
            toasts.splice(indexToDelete, 1);
            commit('setToasts', toasts);
        } else {
            console.error(`The toast with the message "${message}" could not be found and has not been deleted.`);
        }
    }, duration);
  },
}