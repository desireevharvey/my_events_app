const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')

// Index 
router.get('/', async (req,res) => {
    const allEvents = await db.Event.find({});
    res.json(allEvents)
})

// Create Route 
router.post('/', async (req, res) => {
	const createdEvent = await db.Event.create(req.body);
	res.json(createdEvent);
});

// Show Route - works in Postman
router.get('/:id', async (req,res) => {
    const foundEvent = await db.Event.findById(req.params.id).populate('user')
    res.json(foundEvent)
})




module.exports = router
