const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config()
const PORT = 5000
const serverless = require("serverless-http");


const app = express();


app.use(cors())
app.use(express.json())


// API Endpoints

app.get('/',(req,res)=>res.send("Im alive"))
app.post('/data',async(req,res)=>{
    console.log({
        success: true,
        data : req.body,
        req : req
    });
    return res.json({
        success: true,
        data : req.body,
        req : req
    })
})     


// Express and Mongo Connection
const start = async () => {
    try {
    //   await mongoose.connect(
    //     "mongodb://localhost:27017/UserManagement"
    //   );
      app.listen(PORT, () => console.log(`Server started on port at :- http://localhost:${PORT}`));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
start();