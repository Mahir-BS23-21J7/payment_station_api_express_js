const dotenv = require('dotenv').config()

module.exports = {
    app_debug: process.env.APP_DEBUG,
    app_env: process.env.APP_ENV,
    app_host: process.env.APP_HOST,
    app_port: process.env.APP_PORT,
};