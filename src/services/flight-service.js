const { AirportRepository } = require('../repositories');
const { op } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/errors/app-error')
const { FlightRespository } = require('../repositories')
const flightRespository = new FlightRespository();

async function createFlight(data) {
  try {
    const flight = await flightRespository.create(data);
    return flight;
  } catch (error) {
    if(error.name == 'SequelizevalidationError') {
      let explantion = [];
      error.errors.array.forEach((err) => {
        explantion.push(err.message)
      });
      throw new AppError(explantion, StatusCodes.BAD_REQUEST)
    }
    throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAllFlights(query) {
  let customFilter = {};
  let sortFilters = [];
  const endingTripTime = " 23:59:00";

  if(query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }
  if(query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [op.between] : [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
    }
  }
  if(query.traveller) {
    customFilter.totalSeats = {
      [op.get] : query.travellers
    }
  }
  if(query.tripdate) {
    customFilter.departureTime = {
      [op.between]: [query.tripDate , query.tripDate + endingTripTime]
    }
  }
  if(query.sort) {
    const params = query.sort.split(',');
    const sortFilters = params.map((param) => param.split('_'));
  }
  try {
   const flights = await flightRespository.getAllFlights(customFilter);
   return flights;
  } catch(error) {
    throw new AppError('Cannot fetch data of all the flights ', StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

module.exports = {
  createFlight,
  getAllFlights
};
