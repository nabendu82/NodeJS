var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB
// var george = new Cat({
//     name: "Lily",
//     age: 20,
//     temperament: "Old"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong");
//     } else{
//         console.log("We just saved a cat to DB");
//         console.log(cat);
//     }
// });
Cat.create({
   name: "Snow White",
   age: 100,
   temperament: "Cool"
}, function(err, cat){
    if(err){
        console.log("OH NO, ERROR");
        console.log(err);
    } else {
        console.log("THE NEWLY ADDED CAT..");
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR");
        console.log(err);
    } else {
        console.log("ALL THE CATS..");
        console.log(cats);
    }
    
});


