const mongoose = require('mongoose');
const User = require('../model/user');

const profileSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    } ,
    Links:[{
        title:String,
        link : String
    }],
    tags:[String],
    Bio:String,
    counts:Number
},
{timestamps:true})