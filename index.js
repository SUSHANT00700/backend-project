const express = require("express");
const mongoose = require("mongoose");

require("dotenv").process;

const app = express();
app.use(express.json());


const start = ()=>{
    try{
        app.listen(process.PORT,()=>{
            console.log(`Listening on Port: ${process.PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()