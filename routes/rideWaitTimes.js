const express = require('express');
const router = express.Router();
const rideCtrl = require('../controllers/rideTimes');

/**
 * @route GET /wait-times/disney-park-paris
 * @group WaitTimes
 * @return Ride Object
 */
router.get('/wait-times/disney-park-paris', rideCtrl.getWaitTimesDisneylandParks);

/**
 * @route GET /wait-times/disney-studio-paris
 * @group WaitTimes
 * @return Ride Object
 */
router.get('/wait-times/disney-studio-paris', rideCtrl.getWaitTimesDisneylandStudio);

module.exports = router;
