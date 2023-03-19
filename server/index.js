const express = require('express');
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Database Connected")).catch((e)=>{e.message})

app.use('/', require('./src/routes/tagRoutes'))

app.listen(process.env.PORT,()=>console.log("server is running on 8080"))