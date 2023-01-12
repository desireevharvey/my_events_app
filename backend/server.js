// Dependencies

const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models')
require('dotenv').config()
const bodyParser = require('body-parser')



const userCtrl = require('./controllers/users')
const eventCtrl = require('./controllers/events')


// Middleware

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())


// routes

app.use('/user', userCtrl)
app.use('/event', eventCtrl)

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})