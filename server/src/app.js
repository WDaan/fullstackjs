const express = require('express')
const bodyParser = require('body-parser')
const Book = require('./models/books_model')

const app = express()


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ msg: 'books' })
})

app.get('/api/v1/books', async (req, res) => {
    const books = await Book.find({})
    res.json(books)
})

app.post('/api/v1/books', async (req, res) => {
    const book = new Book({ name: req.body.name })
    const savedBook = await book.save()
    res.json(savedBook)
})

module.exports = app
