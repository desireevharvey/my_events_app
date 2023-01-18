const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')


function isAuthenticated(req,res,next) {
    if(req.headers.authorization) {
        next()
    } else {
        res.sendStatus(401)
    }
}


// Create Route 
// router.post('/', async (req, res) => {
// 	const createdEvent = await db.Event.create(req.body);
// 	res.json(createdEvent);
// });

router.post('/', isAuthenticated, async (req,res) => {
    const createdEvent = await db.Event.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdEvent.user = decoded.id
    createdEvent.save()
    res.json(createdEvent)
})

// Index 
router.get('/', async (req,res) => {
    const allEvents = await db.Event.find({});
    res.json(allEvents)
})


// Show Route - works in Postman
router.get('/:id', async (req,res) => {
    const foundEvent = await db.Event.findById(req.params.id).populate('user')
    res.json(foundEvent)
})


// Update Route - works in Postman
router.put('/:id', isAuthenticated, async (req,res) => {
    const foundEvent = await db.Event.findById(req.params.id)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    if(foundEvent.user == decoded.id) {
        const updatedEvent = await db.Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.json(updatedEvent)
    }
})

// Delete route - works in Postman
router.delete('/:id', isAuthenticated, async (req,res) => {
    await db.Event.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})



module.exports = router
