const { StatusCodes } = require('http-status-codes');


const { AirportService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createAirport(req, res) {
    try {
        const airplane = await AirportService.createAirport({
           name: req.body.name,
           code: req.body.code,
           address: req.body.address,
           city_id: req.body.city_id
        });
        SuccessResponse.data = airport;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch(error){
        ErrorResponse.error = error;
          return res
                 .status((error.OK)
)
                 .json(ErrorResponse);
    }
    
}

async function getAirports(req, res) {
    try {
        const airplanes = await AirportService.getAirports()
            SuccessResponse.data = airports;
            return res
                    .status(StatusCodes.OK)
                    .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.StatusCodes)
                .json(ErrorResponse)
    }
}

/**
 * 
 * POST : /airplanes/id 
 * req-body {}
 */

async function getAirport(req, res) {
    try {
        const airports = await AirplaneService.getAirport(req.params.id)
            SuccessResponse.data = airports;
            return res
                    .status(StatusCodes.ok)
                    .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.ok)
                .json(ErrorResponse)
    }
}

async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id)
            SuccessResponse.data = response;
            return res
                    .status(StatusCodes.ok)
                    .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.ok)
                .json(ErrorResponse)
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}