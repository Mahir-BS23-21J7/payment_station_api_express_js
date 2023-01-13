const express = require('express')
const pscDbInit = require('./database/payment_station_cms/objectionOrm/conn')
const bootServer = require('./server')
const {initiateRoutes} = require('./routes')

const app = express()

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

console.log('BOOTING UP ...');

(async function () {
    // Connect Database
    await pscDbInit()
    // Boot NodeJs Server
    await bootServer(app)
    // Initiate Routes
    await initiateRoutes(app)
})();