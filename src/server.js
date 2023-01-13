const { keepAlive } = require('./keepAlive')
const { app_port, app_host } = require('../config/serverConfig')

module.exports = async (app) => {

    // Prevent Crash
    keepAlive(app)

    try {
        // Boot Server
        app.listen(app_port, app_host, () => {
            console.log(`Connected successfully on port ${app_port}`)
        });

    } catch (error) {
        console.error(`Error Occurred: ${error.message}`)
    }
}