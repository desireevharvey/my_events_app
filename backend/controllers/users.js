const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')


function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        res.sendStatus(401)
    }
}

// Create/Sign-Up Route - Works in Postman
router.post('/signup', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(!foundUser){
        const createdUser = await db.User.create(req.body)
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: createdUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    
    }})

//Login Route- not work in Postman
router.post('/login', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(req.body.password === foundUser.password){
        const payload = {id: foundUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: foundUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    }
})


// Show Token
router.get('/token', isAuthenticated, async (req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decoded.id)
    const userEvents = await db.Event.find({ user: foundUser._id })
    res.json({
        user: foundUser,
        events: userEvents
    })
})

// All Users Index Route 
router.get('/', async (req, res) => {
    const allUsers = await db.User.find({})
    res.json(allUsers)
})

// Get User Events by logged in ID
router.get('/get/:id', async (req,res) => {
    const foundUser = await db.User.findById(req.params.id)
    const userEvents = await db.Event.find({ user: foundUser._id })
    res.json(userEvents)
})

// not working in postman(both)
// Show User / Associated Posts
router.get('/:id', isAuthenticated, async (req, res)=> {
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decoded.id)
    const userEvents = await db.Event.find({ user: foundUser._id })
    res.json({
        user: foundUser,
        event: userEvents
    })
})



// edit user (working in postman)
router.put('/:id', async (req, res)=> {
    const updatedUser = await db.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(updatedUser)
})

// Delete User/Associated Posts
router.delete('/:id', isAuthenticated, async (req, res)=> {
    await db.Event.deleteMany({ user: req.params.id})
    await db.User.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})



module.exports = router