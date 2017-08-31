var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/", function(req, res){
   res.send("Hi there!"); 
});

// "/bye"
app.get("/bye", function(req, res){
   res.send("GoodBye!!!!"); 
});

// "/bye"
app.get("/dog", function(req, res){
   console.log("Someone made a request to /dog");
   res.send("Woof!!!!"); 
});

//Route parameter(Pattern matching) - "/r/anything"
app.get("/r/:subreddit", function(req, res){
   var subred = req.params.subreddit;
   res.send("Welcome to the " + subred.toUpperCase() + " subreddit"); 
});

//Route parameter(Pattern matching) - another example
app.get("/r/:subreddit/comments/:id/:title/", function(req, res){
   res.send("Welcome to a subreddit comments page"); 
});

//Everything else
app.get("*", function(req, res){
   res.send("PAGE NOT FOUND"); 
});



//Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});