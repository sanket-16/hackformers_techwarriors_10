const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('passport');
const passport = require('passport');
const MongoStore = require('connect-mongo')
const session = require('express-session')

const app = express();



require("dotenv").config();
//passport config
require('./passport')(passport);



mongoose.connect(process.env.MONGO_URL).then(() => console.log("database connected")).catch((e) => console.log(e.message))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URL,}),
  }))

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("database connected")).catch((e)=>console.log(e.message))
       
app.get('/',(req,res)=>{
    res.send("<h1>I am Inevitable</h1>")
})


app.listen(process.env.PORT, () => console.log("serever is running at 8080"));