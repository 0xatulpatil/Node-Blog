//This file is for storing articles in Database.
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
title:{
    type: String,
    required: true
},
description:{
    type: String,
    required: true
}


});

//Exporting this model
module.exports = mongoose.model('Article', articleSchema);