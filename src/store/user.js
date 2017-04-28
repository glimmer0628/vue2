export const COUNT_ADD = 'COUNT_ADD';
export const SAVE_BINDING = 'SAVE_BINDING';

export default {
  state: {
    count: 0,
    binding: ''
  },
  mutations: {
    [COUNT_ADD](state, user) {
      state.count++;
    },
    [SAVE_BINDING](state, payload) {
      state.binding = payload.binding;
    }
  },
  actions: {
    add({commit}) {
      commit(COUNT_ADD);
    },
    saveBinding({commit}, payload) {
      commit(SAVE_BINDING, payload);
    }
  }
};
