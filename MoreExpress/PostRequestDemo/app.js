var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
var friends = ["Parag", "Amit", "Salma", "Shikha"]; 

app.get("/", function(req, res){
   res.render("home"); 
});

app.post("/addfriend", function(req, res){
   console.log(req.body);
   var newFriend = req.body.newFriend;
   friends.push(newFriend);
   //res.send("You have reached the post route");
   res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends}); 
});

//Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});