const express = require('express'); 
const route = express.Router();
const HomeController = require('../src/controllers/HomeController'); 




route.get('/', HomeController.HomePage);
route.post('/', HomeController.sendData);

module.exports = route;
