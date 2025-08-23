const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airplanes
 * req-body {modelNumber : 'airbus320', capacity:200 }
 */
async function createAirplane(req, res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        const response = new SuccessResponse({ data: airplane });
        return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
        const response = new ErrorResponse({ error: error.message || error });
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
}

async function getAirplanes(req, res) {
    try {
        const airplanes = await AirplaneService.getAirplanes();
        const response = new SuccessResponse({ data: airplanes });
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        const response = new ErrorResponse({ error: error.message || error });
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
}

/**
 * GET : /airplanes/:id
 */
async function getAirplane(req, res) {
    try {
        const airplane = await AirplaneService.getAirplane(req.params.id);
        const response = new SuccessResponse({ data: airplane });
        return res.status(StatusCodes.OK).json(response);
    } catch (error) {
        const response = new ErrorResponse({ error: error.message || error });
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json(response);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane
};
