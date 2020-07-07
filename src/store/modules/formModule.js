import router from '@/router'

export default {
    state: () => ({
        repsList: {},
        totalCount: null,
        pages: [],
        currentPage: 1,
        searchText: ''
    }),
    mutations: {
        updateRepsList(state, payload) {
            state.repsList = payload
            state.totalCount = payload.total_count > 1000 ? 100 : Math.ceil(payload.total_count / 10)
        },
        updatePages(state) {
            state.currentPage = router.currentRoute.query.page ? router.currentRoute.query.page : 1
            const result = [];
            let startCount = Math.ceil(state.currentPage / 10) * 10 - 9;
            const endCount =
                startCount + 9 <= state.totalCount ? startCount + 9 : state.totalCount;
            while (startCount <= endCount) {
                result.push(startCount);
                startCount++;
            }
            state.pages = result;
        },
        setSearchText(state, payload) {
            state.searchText = payload
        }
    },
    actions: {
        async requestSearch({ commit }) {
            const res = await fetch(`https://api.github.com/search/repositories?q=${router.currentRoute.query.q ? router.currentRoute.query.q : 'stars:>=10000'}&sort=stars&order=desc&page=${router.currentRoute.query.page ? router.currentRoute.query.page : 1}&per_page=10`)
                .then(response => response.json())
                .then(data => data)
            commit('updateRepsList', res)
            commit('updatePages', res)
        }
    },
    getters: {
        getRepsList: state => state.repsList,
        getTotalCount: state => +state.totalCount,
        getCurrentPage: state => +state.currentPage,
        getPages: state => state.pages,
        getSearchText: state => state.searchText
    }
}