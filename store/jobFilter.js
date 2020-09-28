export const state = () => ({
    facilities: {},
    benefit: {},
    experience: {},
});

export const getters =  {
  facilities(state) {
    return state.facilities;
  },
  benefit(state) {
    return state.benefit;
  },
  experience(state) {
    return state.experience;
  },
};

export const mutations = {
  SET_FACILITIES(state, data) {
    state.facilities = data
  },
  SET_BENEFIT(state, data) {
    state.benefit = data
  },
  SET_EXPERIENCE(state, data) {
    state.experience = data
  },
};

export const actions =  {

  async GET_FACILITIES({commit}) {
    try {
      const response = await this.$axios.$get('api/facilities.json')
      commit('SET_FACILITIES', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

  async GET_BENEFIT({commit}) {
    try {
      const response = await this.$axios.$get('api/benefit.json')
      commit('SET_BENEFIT', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

  async GET_EXPERIENCE({commit}) {
    try {
      const response = await this.$axios.$get('api/experience.json')
      commit('SET_EXPERIENCE', response.data)
      //console.log(response.data)
    } catch(error) {
      throw error
    }
  },

};
