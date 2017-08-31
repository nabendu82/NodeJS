var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

//POST - title, content
var postSchema = new mongoose.Schema({
   title: String,
   content: String,
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

//Adding data
// var newUser = new User({
//     email: "shikha@gmail.com",
//     name: "Shikha",
    
// });

// newUser.posts.push({
//     title: "Cats are good",
//     content: "I love cats"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });


//Displaying data/add posts
User.findOne({name: "Shikha"},function(err, user){
        if(err){
        console.log(err);
    } else{
        // console.log(user);
        user.posts.push({
            title: "3 things i love",
            content: "sleep sleep sleep"
        });
        user.save(function(err, user){
                if(err){
                    console.log(err);
                } else{
                    console.log(user);
                }
            });
    }
});

