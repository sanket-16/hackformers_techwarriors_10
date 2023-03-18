const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();



require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("database connected")).catch((e)=>console.log(e.message))
       
app.get('/',(req,res)=>{
    res.send("<h1>I am Inevitable</h1>")
})


app.listen(process.env.PORT,()=> console.log("serever is running at 8080"));