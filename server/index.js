const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());



require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("database connected")).catch((e)=>console.log(e.message))
       
app.get('/',(req,res)=>{
    res.send("<h1>I am Inevitable</h1>")
})

const profileRoutes = require('./src/routes/profileRoutes');

app.use('/',profileRoutes);


app.listen(process.env.PORT,()=> console.log("serever is running at 8080"));