const { Router } = require('express');
var Items = require('../controllers/items.controller');

module.exports = (Router) => {
    Router.post('/create', Items.createItem);
    Router.get('/get', Items.getItems);
    Router.get('/get/:name', Items.getItem);
    Router.put('/update/:id', Items.updateItem);
    Router.delete('/remove/:id', Items.deleteItem);
}