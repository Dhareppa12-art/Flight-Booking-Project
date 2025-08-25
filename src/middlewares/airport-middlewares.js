const { StatusCodes } = require('http-status-codes');
const { ErrorResponse  } = require('../utils');

function validateCreateRequest(req, res, next) {
    if(!req.body.name) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error =   new AppError ([ 'Name not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
    if(!req.body.code) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error =   new AppError ([ 'Airport code not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
    if(!req.body.city_id) {
        ErrorResponse.message = 'Something went wrong while creating airport';
        ErrorResponse.error =   new AppError ([ 'City id not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
    next();
}

module.exports = {
   validateCreateRequest
}