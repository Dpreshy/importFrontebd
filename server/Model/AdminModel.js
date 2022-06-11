const mongoose = require('mongoose');

const postModel= mongoose.Schema({
    fullname:{
        type: String,
    },
    email:{
        type: String,
    },
    contact:{
        type: String,
    },
    message:{
        type: String,
    },
});

module.exports = mongoose.model("posts", postModel);