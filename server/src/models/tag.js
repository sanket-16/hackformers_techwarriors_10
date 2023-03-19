const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    skill: {
        type: String,
    }
})
module.exports = mongoose.model('Tag', tagSchema)