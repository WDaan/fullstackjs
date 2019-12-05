import axios from 'axios'

export default class BookService {
    static getBooks() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get('/api/v1/books')
                resolve(res.data)
            } catch (e) {
                reject(e)
            }
        })
    }

    static createBook(book) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post('/api/v1/books', { name: book })
                resolve(res.data)
            } catch (e) {
                reject(e)
            }
        })
    }
}
