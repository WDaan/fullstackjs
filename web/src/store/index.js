import Vue from 'vue'
import Vuex from 'vuex'
import BookService from '../services/Bookservice'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
    },
    mutations: {
        async getBooks(state) {
            state.books = []
            try {
                const res = await BookService.getBooks()
                state.books.push(res)
            } catch (e) {
                console.log(e)
            }
        },
        async createBook(state, book) {
            try {
                const res = await BookService.createBook(book)
                console.log(res)
                state.books.push(res)
            } catch (e) {
                console.log(e)
            }
        },
    },
    actions: {},
    getters: {
        state_getBooks: state => () => state.books,
    },
    modules: {},
})
