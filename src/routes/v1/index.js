const express = require('express');
const { infoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-route');
const cityRoutes = require('./city-routes')
const router = express.Router();

router.use('/airplanes', airplaneRoutes); // ✅ fixed here
router.use('./cities',cityRoutes )
router.get('/info', infoController.info);

module.exports = router;
