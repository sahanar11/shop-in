var mongoose = require('mongoose');  
var Schema = mongoose.Schema;       
    
// variable Schema type mongooses schema 
// schema acts like a blueprint for all the data we enter to db
// passing json obj as attr to schema


var schema = new Schema({  
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
});
module.exports = mongoose.model('Product', schema);