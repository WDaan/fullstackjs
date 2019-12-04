import axios from 'axios'

class BookService {
    static getBooks() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = axios.get('/api/v1/books')
                resolve(res.data)
            } catch (e) {
                reject(e)
            }
        })
    }

    static createBook(book) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = axios.post('/api/v1/books', book)
                resolve(res.data)
            } catch (e) {
                reject(e)
            }
        })
    }
}
