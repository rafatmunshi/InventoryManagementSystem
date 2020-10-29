var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({

    name: {
        type: String,
        required: true,
      },
    brand: {
        type: String,
        required: true,
       },
    category: {
         type: String,
         required: true,
       },
     created_by: {
         type: String,
         required: true,
       },
     created_At:  {
         type: Date,
         default: Date.now 
     },
     updated_At:  {
         type: Date,
         default: Date.now 
     },
});

module.exports = itemSchema;