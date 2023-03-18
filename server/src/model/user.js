const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    // profile: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Profile",
    //     required: true

    // }
},{timestamps: true})

module.exports = mongoose.model('User', userSchema)