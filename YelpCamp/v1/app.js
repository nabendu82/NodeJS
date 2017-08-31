var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
       {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
       {name: "Salmon River", image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},
       {name: "Salmon Hill", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
       {name: "Creek Hill", image: "https://farm8.staticflickr.com/7042/7121867321_65b5f46ef1.jpg"}
   ];

app.get("/", function(req, res){
   res.render("landing.ejs"); 
});

app.get("/campgrounds", function(req, res){
    
   res.render("campgrounds.ejs", {campgrounds: campgrounds}); 
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //rediect back to campgrounds page
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started");
});