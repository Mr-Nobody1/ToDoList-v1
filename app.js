const bodyParser = require("body-parser");
const express = require("express");
const ejs = require('ejs');
const date = require(__dirname + '/date.js');



const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];




app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
   
   let day = date.getDay();

   res.render("list", {kinfOfDay: day, newListItem: items});
   


});

app.post("/", function(req, res){
   var item = req.body.newItem;
   items.push(item);
   
   res.redirect("/");
   
})

app.post("/about", function(req, res){
   res.render("about");
})

app.listen(3000, function(){
    console.log("Server is running");
});






// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
//     var currentDay = weekday[today.getDay()];
// if(today.getDate() === 6 || today.getDate() === 0 ){
//    day = currentDay ;

// }else{
//    day = currentDay;
// }
//    res.render("list", {kinfOfDay: currentDay});











// app.post("/", function(req, res){
//    var item = req.body.newItem;
//    items.push(item);

//    res.redirect("/");

// });





// var options = {   weekday: 'long', day: 'numeric', month: 'long' };

// var day = today.toLocaleDateString('en-US', options);

// res.render("list", {kinfOfDay: day , newListItem: items});