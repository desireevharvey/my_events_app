// Dependencies

const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./models')
require('dotenv').config()
const bodyParser = require('body-parser')
const path = require("path")



const userCtrl = require('./controllers/users')
const eventCtrl = require('./controllers/events')


// Middleware

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))


// routes

app.use('/user', userCtrl)
app.use('/event', eventCtrl)


app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});


app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})


