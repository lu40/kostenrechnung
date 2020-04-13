const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    amount: {
        type: Number
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})

module.exports = mongoose.model('Account', accountSchema)