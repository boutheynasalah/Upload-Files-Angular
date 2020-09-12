const express = require("express");
var logger = require('morgan');
const bodyParser = require("body-parser");
const UploadController=require('./UploadController');

var cors =require('cors')

var app = express();
/******************************************************* */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');  
    res.header("Access-Control-Allow-Headers", "Authorization");
    next();
})

/**************************** */


//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//logger
app.use(logger('dev'));

//  Route
app.use("/upload",UploadController);

//cors
app.get('/', cors(),function(req, res){
    res.send('okkk');
});


/*************************** */
// handle errors
app.use(function(err, req, res, next) {
    console.log(err);

    if(err.status === 404)
        res.status(404).json({message: "Not found"});
       //res.status(404).send('not found')
    else
        res.status(500).json({message: "verfier vos données"});
});



app.listen(3000, function(){
    console.log('Node server listening on port 3000');
});