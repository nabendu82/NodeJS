var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));

var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//   name: "Salmon Creek",
//   image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
//   description: "This is a huge camp site , with beautiful hills and beatiful rocks"
// }, function(err, campground){
//     if(err){
//         console.log("OH NO, ERROR");
//         console.log(err);
//     } else {
//         console.log("THE NEWLY ADDED CAMPGROUND..");
//         console.log(campground);
//     }
// });

// var campgrounds = [
//       {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
//       {name: "Salmon River", image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},
//       {name: "Salmon Hill", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
//       {name: "Creek Hill", image: "https://farm8.staticflickr.com/7042/7121867321_65b5f46ef1.jpg"}
//   ];

app.get("/", function(req, res){
   res.render("landing.ejs"); 
});

app.get("/campgrounds", function(req, res){
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
    if(err){
        console.log("OH NO, ERROR");
        console.log(err);
    } else {
        res.render("index.ejs", {campgrounds: allCampgrounds});
    }
    
    });
   //res.render("campgrounds.ejs", {campgrounds: campgrounds}); 
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //rediect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
    //Find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show.ejs",{campground: foundCampground});
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started");
});