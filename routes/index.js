const Router = require('express').Router();
const apiRoutes = require('./api');

Router.use('/api', apiRoutes);

Router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = Router;