export const state = () => ({
    listPrayer: {},
});

export const getters =  {
  listPrayer(state) {
    return state.listPrayer;
  },
};

export const mutations = {
  SET_LIST_PRAYER(state, data) {
    state.listPrayer = data
  },
};

export const actions =  {

  async GET_LIST_PRAYER({commit}) {
    try {
      const response = await this.$axios.$get('api/list.json')
      commit('SET_LIST_PRAYER', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

};
