var Items = require('../dao/items.dao');

exports.createItem = (req, res, next) => {
    var item = {
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        created_by: req.body.created_by,
        created_At: req.body.created_At,
        updated_At: req.body.updated_At
    };

    Items.create(item, (err, item) => {
        if (err) {
            res.json({
                error : err
            })
        }
        res.json({
            message: "Item created successfully"
        })
    })
}

exports.getItems = (req, res, next) => {
   
    Items.get({}, (err, items) => {
        if(err){
            res.json({
                error:err
            })
        }
        res.json({
            items:items
        })
    })
}

exports.getItem = (req, res, next) => {
    Items.getByName({name: req.params.name}, (err, items) => {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            items: items
        })
    })
}

exports.updateItem = (req, res, next) => {
    var item = {
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        created_by: req.body.created_by,
        created_At: req.body.created_At,
        updated_At: req.body.updated_At
    };

    Items.update({_id: req.params.id}, item, (err, item) => {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Item updated successfully"
        })
    })
}

exports.deleteItem = (req, res, next) => {
    Items.delete({_id: req.params.id}, (err, item) => {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Item deleted successfully"
        })
    })
}