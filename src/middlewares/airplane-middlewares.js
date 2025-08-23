const { StatusCodes } = require('http-status-codes');
const { ErrorResponse  } = require('../utils/');
function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.message = 'Something went wrong while creating airplane';
        ErrorResponse.error =   new AppError ([ 'Model Number not Found in the oncoming the request in the correct form' ],StatusCodes.BAD_REQUEST);
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse) 
    }
    next();
}

module.exports = {
   validateCreateRequest
}