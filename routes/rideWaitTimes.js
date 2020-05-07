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

/**
 * @route GET /fav-rides/:user
 * @group FavRides
 * @return favride object (ride object + userid)
 */
router.get('/fav-rides/:user', rideCtrl.getFavRides);

/**
 * @route POST /fav-rides/add
 * @group FavRides
 * @return message 200 
 */
router.post('/fav-rides/add', rideCtrl.addFavRide);

module.exports = router;
