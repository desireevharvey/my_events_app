const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    image: {type: String},
    performer: {type: String},
    date: {type: Date},
    time: {type: String},
    venue: {type: String}
},{timestamp:false})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event