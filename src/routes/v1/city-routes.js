const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares }  = require('../../middlewares')

const router = express.Router();

// remove the duplicate '/airplanes'
router.post('/', 
    CityMiddlewares.validateCreateRequest,
    CityController.createCity);
  

module.exports = router;
