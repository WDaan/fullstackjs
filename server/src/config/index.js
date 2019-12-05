let DB_URI = 'mongodb://localhost:27017/fullstack'

if (process.env.MONGO_DB_URI) {
    DB_URI = process.env.MONGO_DB_URI
}

module.exports = {
    DB_URI,
}
