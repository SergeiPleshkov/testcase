// initial state
export const state = () => ({
  number: 0
})

// getters
export const getters = {
}

// mutations
export const mutations = {
  addNumber(state, token) {
    console.log('addNumber +1')
    state.number += 1
  }
}

// actions
export const actions = {
  addNumber({ commit }) {
    commit("addNumber")
  }
}
