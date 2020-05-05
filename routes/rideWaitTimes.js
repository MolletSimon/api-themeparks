const express = require('express');
const router = express.Router();
const rideCtrl = require('../controllers/rideTimes');

router.get('wait-times/disney-park-paris', rideCtrl.getWaitTimesDisneylandParks);
router.get('wait-times/disney-studio-paris', rideCtrl.getWaitTimesDisneylandStudio);

module.exports = router;
