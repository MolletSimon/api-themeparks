const mongoose = require('mongoose');

const favRidesSchema = mongoose.Schema({
    ride : {
        id: {},
        name: String,
        waitTime: Number,
        active: Boolean,
        fastPass: Boolean,
        meta: {
            fastPassStartTime: String,
            fastPassEndTime: String,
            singleRider: Boolean,
            longitude: Number,
            latitude: Number,
            area: String,
        },
        status: String,
        lastUpdate: Date,
        schedule: {
            openingTime: String,
            closingTime: String,
            type: String,
            special: [{openingTime: String, closingTime: String, type: String}]
        }
    },
    user: String
});

module.exports = mongoose.model('favRides', favRidesSchema);