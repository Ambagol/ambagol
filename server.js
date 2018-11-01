 const express = require("express"),
     app = express(),
     path = require("path"),
     bP = require("body-parser"),
     port = process.env.PORT || 8080,
     session = require("express-session");
 // app.use(express.static(path.join(__dirname, "/client/dist/client")));
 let distDir = __dirname + "/dist/ambagol";
 app.use(express.static(distDir));
 app.use(bP.json());
 app.use(session({ secret: "something", saveUninitialized: true })); //change some string to an actual string inside quotes
 //comment out until mongoose & routes files are built else error
 //require("./server/config/mongoose.js");
 //require("./server/config/routes.js")(app); //importing app and running it immediately
 app.get('/*', function(req, res) {

     res.sendFile(path.join(__dirname + '/dist/ambagol/index.html'));
 });
 app.listen(port, function() {
     console.log("listening on port", +port);
 })