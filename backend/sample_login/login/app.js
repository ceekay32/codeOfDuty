const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

const ejs = require("ejs");
const User = require("./db/User");

app.set("view engine", "ejs");

app.listen(5000, function(){
    console.log("Connected to the server 5000");
})

app.get("/",function(req,res)
{
    res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req,res)
{
    var username = req.body.username;
    var email = req.body.email;
    var data = {
        "username" : username,
        "email" : email
    };
    let arr = [];
    arr.push(data);
    run();
   async function run()
   {
    //    const user = new User({name : req.body.username, email : req.body.email});
    //    await user.save();
       User.insertMany(arr,function(err)
       {
          if(err)
          {
            console.log(err);
          }
          else
          {
            console.log("Record added successfully");
            res.send("You logged in successfully");
          }
       })
      
       
   }
})