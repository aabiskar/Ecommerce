var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();

mongoose.connect(config.database, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});


//Middleware
app.use(morgan('dev'));

app.get('/', function(req, res) {
    var name = "Manoj";
    res.json("My name is " + name);
});

app.listen(3000, function(err) {
    if (err) throw err;
    console.log("Server is running on port 3000");
});