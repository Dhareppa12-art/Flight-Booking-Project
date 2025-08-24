const express = require('express');
const { CityController } = require('../../controllers');

const router = express.Router();

// remove the duplicate '/airplanes'
router.post('/', 
    CityController.createCity);
  

module.exports = router;
