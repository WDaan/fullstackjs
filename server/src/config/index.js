let DB_URI = 'mongodb://db:27017/'

if (process.env.MONGO_DB_URI) {
    DB_URI = process.env.MONGO_DB_URI
}

module.exports = {
    DB_URI,
}
