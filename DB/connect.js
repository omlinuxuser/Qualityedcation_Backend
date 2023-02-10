const mongoose = require('mongoose');

//!  Connect to (MongoDb) Database:
mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("Connection is successful DB");
 }).catch((e)=>{
    console.log("No connect DB")
 })