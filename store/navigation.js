export const state = () => ({
  navigationStep: 0
})

export const mutations = {
  setNavigationStep (state, payload) {
    state.navigationStep = payload
  }
}

export const getters = {
  navigationStep: state => state.navigationStep
}
