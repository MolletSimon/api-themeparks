const Themeparks = require('themeparks');
const RideWaitTimes = require('../models/RideWaitTimes');

const DisneylandParis = new Themeparks.Parks.DisneylandParisMagicKingdom();
const DisneyStudios = new Themeparks.Parks.DisneylandParisWaltDisneyStudios();

exports.getWaitTimesDisneylandParks = (req, res, next) => {
    DisneylandParis.GetWaitTimes()
        .then(waitTimes => {
            res.status(200).json({waitTimes});
            waitTimes.forEach(waitTime => {
                const rideWaitTime = new RideWaitTimes({...waitTime});
                rideWaitTime.save().then(() => console.log('Sauvegarde effectué')).catch(err => console.error(err));
            })
        })
        .catch(error => res.status(400).json(error))
}

exports.getWaitTimesDisneylandStudio = (req, res, next) => {
    DisneyStudios.GetWaitTimes()
        .then(waitTimes => {
            res.status(200).json({waitTimes});
            waitTimes.forEach(waitTime => {
                const rideWaitTime = new RideWaitTimes({...waitTime});
                rideWaitTime.save().then(() => console.log('Sauvegarde effectué')).catch(err => console.error(err));
            })
        })
        .catch(error => res.status(400).json(error))
}
