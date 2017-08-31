var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there! Welcome to my assignment"); 
});

app.get("/speak/:animal", function(req, res){
   var animal = req.params.animal;
   if(animal === "pig")
      res.send("The " + animal + " says 'Oink'"); 
    else if(animal === "cow")
      res.send("The " + animal + " says 'Moo'"); 
    else if(animal === "dog")
      res.send("The " + animal + " says 'Woof Woof'"); 
    
});


app.get("/repeat/:statement/:times", function(req, res){
   var times = Number(req.params.times);
   var word = req.params.statement;
   var display = "";
   for(var i=0 ; i<times ; i++)
        display += word + " ";
    res.send(display);
        
});

app.get("*", function(req, res){
   res.send("Sorry, Page not found..What are you doing with your life"); 
});



//Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});