const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mongo = require('./app/mongodb')
const router = require('./app/routes')
const configMongoDB = require('./config/mongodb')


dotenv.config()

const port = process.env.PORT || 8080
app.listen(port)
console.log(`Flashcards listening on port: ${port}`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(router)

mongo.connect(process.env.MONGODB_URL)
    .then(() => configMongoDB(app))
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })