const { StatusCodes } = require('http-status-codes');
const { ErrorResponse  } = require('../utils');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ 'flightNumber not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
    if(!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ 'airplaneId code not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
    if(!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ ' departureAirportId not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
     if(!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ ' arrivalAirportId not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
     if(!req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ ' arrivalTime not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
     if(!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ ' departureTime not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
     if(!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ ' price not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
     if(!req.body.boardingGate) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ ' boardingGate not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
     if(!req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error =   new AppError ([ ' totalSeats not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
    next();
}

module.exports = {
   validateCreateRequest
}