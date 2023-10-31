const Router = require('express').Router();
const product = require('./product');
const tags = require('./tag');
const categories = require('./category');

Router.use('/products', product);
Router.use('/tags', tags);
Router.use('/categories', categories);

module.exports = Router;
