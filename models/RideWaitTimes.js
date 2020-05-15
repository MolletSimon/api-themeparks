const mongoose = require('mongoose');

const rwtSchema = mongoose.Schema({
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
});

module.exports = mongoose.model('RideWaitTimes', rwtSchema);
