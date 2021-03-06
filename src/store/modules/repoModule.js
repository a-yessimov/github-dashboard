export default {
    state: () => ({
        currentRepo: {}
    }),
    actions: {
        async requestRepo({ commit }, payload) {
            const res = await fetch(`https://api.github.com/repos/${payload}`)
                .then(response => response.json())
                .then(data => data)
            commit('setCurrentRepo', res)
        }
    },
    mutations: {
        setCurrentRepo(state, payload) {
            state.currentRepo = payload
        }
    },
    getters: {
        getCurrentRepo: state => state.currentRepo
    }
}