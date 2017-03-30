import Vue from 'vue'

export const STORE_INDEX = 'STORE_INDEX'

export default {
    state: sessionStorage.getItem('index') || '1',
    mutations: {
        [STORE_INDEX](state, index) {
            sessionStorage.setItem('index', index.toString())
        }
    },
    actions: {
        [STORE_INDEX]({commit}, index) {
            commit(STORE_INDEX, index)
        }
    }
}