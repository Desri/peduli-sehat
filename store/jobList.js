export const state = () => ({
    listJob: {},
});

export const getters =  {
  listJob(state) {
    return state.listJob;
  },
};

export const mutations = {
  SET_LIST_JOB(state, data) {
    state.listJob = data
  },
};

export const actions =  {

  async GET_LIST_JOB({commit}) {
    try {
      const response = await this.$axios.$get('api/list.json')
      commit('SET_LIST_JOB', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

};
