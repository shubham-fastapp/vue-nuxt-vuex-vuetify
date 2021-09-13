
// Manually set this user as logged in user
const user = {
    id: 1,
    firstName: "Krish",
    lastName: "Lee",
    username: "krish_lee",
    following: 51,
    followers: 21,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa id neque aliquam. Ut diam quam nulla porttitor massa id.",
}

export const state = () => ({
    user: {

    }
})

export const mutations = {
    SET_USER(state, user) {
        state.user = user
    }
}

export const actions = {
    setUser({ commit }) {
        commit('SET_USER', user)
    }
}