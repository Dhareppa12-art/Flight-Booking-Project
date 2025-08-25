const CrudRepository = require('./crud-repository');
const { Flight } = require('../models');
const { where } = require('sequelize');


class FlightRespository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
      const response = await Flight.findAll({
        where: filter,
        order : sort
      })
    }
}

module.exports = FlightRespository;


