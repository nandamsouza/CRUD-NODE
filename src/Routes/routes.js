const express = require('express');
const route=  express.Router();

const userController = require('../Controller/UserController');

route.post('/',userController.post);
route.get('/', userController.get);
route.put('/:id',userController.put);
route.delete('/:id',userController.delete);

module.exports = route;