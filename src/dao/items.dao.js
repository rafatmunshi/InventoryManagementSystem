var mongoose = require('mongoose');
var itemSchema = require('../models/items.models');

itemSchema.statics = {
    create : function(data, cb) {
        var item = new this(data);
        item.save(cb);
    },

    get : function(query, cb) {
        this.find(query, cb);
    },

    getByName : function (query, cb) {
        this.find(query, cb);
    },

    update : function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new : true}, cb);
    },
    
    delete: function(query, cb)  {
        this.findOneAndDelete(query, cb);
    }
}

// registering the schema with mongoose.model

var itemModel = mongoose.model('User', itemSchema);

//exporting the mongoose.model and later importing in the controller
module.exports = itemModel;