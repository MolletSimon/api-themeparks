const Themeparks = require('themeparks');
const RideWaitTimes = require('../models/RideWaitTimes');
const FavRides = require('../models/FavRides');

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
};

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
};

exports.getFavRides = (req, res, next) => {
    FavRides.find({ user: req.params.user })
        .then(favRides => res.status(200).json({favRides}))
        .catch(err => res.status(500).json(err))
};

exports.addFavRide = (req, res, next) => {
    favRide = new FavRides({...req.body});
    favRide.save()
        .then(() => res.status(201).json({message: 'Favori ajouté'}))
        .catch(err => res.status(500).json(err));
};
