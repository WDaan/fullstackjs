import Vue from 'vue'
import Vuex from 'vuex'
import BookService from '../services/Bookservice'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
    },
    mutations: {},
    actions: {
        getBooks: state => async () => {
            state.books = []
            try {
                const res = await BookService.getBooks()
                state.books.push(res)
            } catch (e) {
                console.log(e)
            }
        },
        createBook: (state, book) => async () => {
            try {
                const res = await BookService.createBook(book)
                state.books.push(res)
            } catch (e) {
                console.log(e)
            }
        },
    },
    getters: {
        state_getBooks: state => () => state.books,
    },
    modules: {},
})
