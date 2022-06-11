const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test2');

const userSchema = new mongoose.Schema({username : String, email : String});

module.exports = mongoose.model("User",userSchema);