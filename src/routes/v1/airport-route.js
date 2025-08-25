const express = require('express');
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares')

const router = express.Router();

// remove the duplicate '/airplanes'
router.post('/', 
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);

router.get('./',
        AirportController.getAirports);    

router.get('/:id',
        AirportController.getAirports);    
        
router.delete('/:id',
        AirportController.destroyAirport);   

module.exports = router;
