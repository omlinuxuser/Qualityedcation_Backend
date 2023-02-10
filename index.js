const express = require('express');
const app = express();
const port = process.env.PORT || 2000;







app.get('/', (req, res) =>{
    res.send("server working...");
})








//! listen Port
app.listen(port, () =>{
    console.log(`Connection setup sucessfull ${port}`)
})