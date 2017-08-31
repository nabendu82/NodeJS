var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
      {
          name: "Salmon Creek", 
          image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
          description: "Two exquisite objection delighted deficient yet its contained. Cordial because are account evident its subject but eat. Can properly followed learning prepared you doubtful yet him. Over many our good lady feet ask that."
      },
      {
          name: "Yellow River", 
          image: "https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg",
          description: "Expenses own moderate day fat trifling stronger sir domestic feelings. Itself at be answer always exeter up do. "
      },
      {
          name: "Red Hill", 
          image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
          description: "Though or my plenty uneasy do. Friendship so considered remarkably be to sentiments. Offered mention greater fifteen one promise because nor. Why denoting speaking fat indulged saw dwelling raillery. "
      },
      {
          name: "Creek Hill", 
          image: "https://farm8.staticflickr.com/7042/7121867321_65b5f46ef1.jpg",
          description: "Dependent certainty off discovery him his tolerably offending. Ham for attention remainder sometimes additions recommend fat our. Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards."
      }
  ];


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds");
                //add a few campgrounds
                data.forEach(function(seed){
                  Campground.create(seed, function(err, campground){
                      if(err){
                          console.log(err);
                      } else {
                          console.log("Added a campground");
                          //create a comment
                          Comment.create(
                              {
                                  text: "This place is great, but i wish there was internet",
                                  author: "Homer"
                              }, function(err, comment){
                                  if(err){
                                      console.log(err);
                                  } else{
                                      campground.comments.push(comment);
                                      campground.save();
                                      console.log("Created new comment");
                                  }
                                   
                              });
                      }
                       
                  });
                });
        }
    });

}

module.exports = seedDB;