const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('database connected'))
  .catch((e) => console.log(e.message));



app.listen(process.env.PORT, () => console.log('serever is running at 8080'));
