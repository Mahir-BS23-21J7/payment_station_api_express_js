const {errorResponse} = require('../utils/commonUtils')
const {UploadError} = require('./UploadError')
const {NotFoundError} = require('./NotFoundError')
const {ValidationError} = require('./ValidationError')
const {AuthenticationError} = require('./AuthenticationError')
const {AuthorizationError} = require('./AuthorizationError')
const { app_debug } = require('../../config/serverConfig')
const multer = require('multer')

const showStackTrace = err => app_debug === true && {stackTrace: err.stack} 

exports.handleError = function handleError(app) {

    // Handle 404
    app.use((req, res, next) => next(new NotFoundError(`Requested URL was not found!`)))

    // Handle All Error
    app.use((err, req, res, next) => {

        if (res.headersSent) {
            return next('There was an unhandled error!')
        }

        if(err?.respond) {
            return err.respond(res)
        }

        return res.status(500).send(errorResponse(
            500, [{msg: 'Internal Server Error'}, showStackTrace(err)]
        ))
    })
}
