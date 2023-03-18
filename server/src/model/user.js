const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        required: true

    }
},{timestamps: true})

module.exports = mongoose.model('User', UserSchema)