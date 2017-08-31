var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.render("home.ejs"); 
});

app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   res.render("love.ejs", {thingVar: thing}); 
});


app.get("/posts", function(req, res){
   var posts = [
        {title: "JavaScript is the best Coding language", author: "Susy"},
        {title: "Nodejs is awesome", author: "Saty"},
        {title: "Ruby on rails vs Nodejs vs Python Django", author: "Suman"},
    ];
    res.render("posts.ejs", {posts, posts});
});


//Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});