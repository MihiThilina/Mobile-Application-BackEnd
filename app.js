const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port =4000;

const user = require('./routes/user')
const vehicels = require('./routes/vehical')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



const url ='mongodb://localhost/MobileAppBackend'
mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",()=>{
    console.log('MongoDB connected!');
})

app.use(express.json())
app.use('/users',user)
app.use('/vehicels',vehicels)




app.listen(port,(req,res)=>{
    console.log("express App Listeing on port 4000")
})