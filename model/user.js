const mongoose = require('mongoose')
const User = new mongoose.Schema({
    name:{
        type: String,
        require: false
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },

})
module.exports = mongoose.model("User", User)