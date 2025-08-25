const { AirportRespository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error')
// Create an instance (different name than the class)
const AirportRepository = new AirportRespository();

async function createAirport(data) {
  try {
    const airport = await AirportRepository.create(data);
    return airport;
  } catch (error) {
    if(error.name == 'SequelizevalidationError') {
      let explantion = [];
      error.errors.array.forEach((err) => {
        explantion.push(err.message)
      });
      throw new AppError(explantion, StatusCodes.BAD_REQUEST)
    }
    throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirport() {
try {
  const airport = await AirportRepository.getAll();
  return airport;
}  catch (error){
    throw new AppError('Cannot fetch data of all the Airport', StatusCodes.INTERNAL_SERVER_ERROR)
}
}

async function getAirport(id) {
  try {
    const airp = await AirportRepository.get(id);
    return airport;
  } catch(error) {
    if(error.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError('The airport you requested is not present', error.StatusCodes)
    }
    throw new AppError('Cannot fetch data of all the airport', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function destroyAirport(id){
  try {
  const airport = await AirportRespository.destroy(id);
  return airport;
 } catch (error){
     if(error.StatusCodes == StatusCodes.NOT_FOUND) {
      throw new AppError('The airport you requested to delete is  not present', error.StatusCodes)
    }
    throw new AppError('Cannot fetch data of all the Airport', StatusCodes.INTERNAL_SERVER_ERROR)
}
}

module.exports = {
  createAirport,
  getAirport,
  getAirport,
  destroyAirport
};
