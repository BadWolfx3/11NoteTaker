//Dependencies
const express = require("express");

//Express configuration
const app = express();

//Initial port
const PORT = process.env.PORT || 3000;

//Use public folder
app.use(express.static("public")); 

//Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router, includes js files
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


//Adds listener, "starts" server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});