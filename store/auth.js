// store/auth.js
export const state = () => ({
    loggedIn: false,
    user: null,
})

export const mutations = {
    SET_LOGGED_IN(state, value) {
        state.loggedIn = value
    },
    SET_USER(state, data) {
        state.user = data
    },
}

export const actions = {
    async login({ commit }, loginData) {
        try {
            let response = await this.$auth.loginWith('local', { data: loginData })
                // Pastikan respons mengandung data pengguna yang diharapkan
            commit('SET_LOGGED_IN', true)
            commit('SET_USER', response.data.user) // Sesuaikan path ke data pengguna jika berbeda
        } catch (error) {
            throw error
        }
    },
    logout({ commit }) {
        this.$auth.logout()
        commit('SET_LOGGED_IN', false)
        commit('SET_USER', null)
    },
}
