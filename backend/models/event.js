const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    image: {type: String},
    performer: {type: String},
    date: {type: String},
    time: {type: String},
    venue: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
{ timestamps: false }
)

const Event = mongoose.model("Event", eventSchema)

module.exports = Event