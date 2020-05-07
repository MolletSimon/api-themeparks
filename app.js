const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const rideRoutes = require('./routes/rideWaitTimes');

let options = {
    swaggerDefinition: {
        info: {
            description: 'NodeJS API for Themeparks',
            title: 'API Themeparks',
            version: '1.0.0',
        },
        host: 'https://api-madera.cleverapps.io',
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};
expressSwagger(options)

mongoose.connect(
    'mongodb+srv://molletsimon:bspahOcz603eQvIT@cluster0-twfrq.mongodb.net/Themeparks?retryWrites=true&w=majority',
    {useNewUrlParser: true,
        useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api', rideRoutes);

module.exports = app;
