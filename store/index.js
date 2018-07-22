export const state = () => ({
    featuredMessage: null
})
  
export const mutations = {
    SET_FEATURED_MESSAGE (state, message) {
        state.featuredMessage = message
    }
}

export const getters = {
    message (state) {
        return state.featuredMessage
    },
}