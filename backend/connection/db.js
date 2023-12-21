const mongoose = require('mongoose')

require('dotenv').config({ path: '../.env' })

// const MONGO_URL = process.env.MONGO_URI
const MONGO_URL = "mongodb+srv://mahashwethags22mca:Ez2wjrTCgvwAVyXC@cluster0.4n6qsz9.mongodb.net/"

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log(`MongoDb connected...`)
    }).catch((err) => {
        console.log(`Error: ${err.message}`)
    });