
var express = require('express');
var fs = require('fs');
var path = require('path');
var apiRoutes = require('./routes/apiroutes.js');
var htmlRoutes = require('./routes/htmlroutes.js');

// initialize express
var app = express();
var PORT = process.env.PORT || 3000;

// set up data parser 
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static(__dirname));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// set up listener
app.listen(PORT, function () {
    console.log('App is listening on PORT: ' + PORT);
});