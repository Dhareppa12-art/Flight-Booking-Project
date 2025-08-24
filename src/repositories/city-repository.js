const CrudRepository = require('./crud-repository');
const { City } = require('../models');   // import City model with uppercase

class CityRepository extends CrudRepository {
    constructor() {
        super(City);  // pass correct model
    }
}

module.exports = CityRepository;
