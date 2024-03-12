//Basic Library import
const express = require('express');
const router = require('./src/route/api');
const app = new express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');


// Cors enable
app.use(cors());

//Security Implementation
app.use(helmet());
app.use(hpp(true));
app.use(express.json({limit:'20mb'}));
app.use(express.urlencoded({extended:true}));

let limiter = rateLimit({windowMs: 15*60*1000,max:3000});
app.use(limiter);


let URL = "mongodb+srv://sabir:sabir123@cluster0.ukvobhq.mongodb.net/taskManager"
let OPTION = {user:"", pass:"", autoIndex:true}

// mongodb/DB connection
mongoose.connect(URL, OPTION)
    .then((res) =>{
        console.log("DataBase Connected")
    }).catch((err) =>{
        console.log(err)
})

//Route implement
app.use("/api",router);

// 404 Not Found implement
app.use("*",(req,res)=>{
    res.status(404).json({data:"Not found"})
})

module.exports = app;





