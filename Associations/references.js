var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo_2", {useMongoClient: true});

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//   email:"bob@fmail.com",
//   name: "Bob"
// });

Post.create({
  title: "How to cook fish",
  content: " zzzzzzzzzzzzzzz"
}, function(err, post){
    User.findOne({email: "bob@fmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                        if(err){
                            console.log(err);
                        } else {
                            console.log(data);
                        }
            });
        }
    });
});

// User.findOne({email: "bob@fmail.com"}).populate("posts").exec(function(err, user){
//                           if(err){
//                             console.log(err);
//                         } else {
//                             console.log(user);
//                         }  
// });