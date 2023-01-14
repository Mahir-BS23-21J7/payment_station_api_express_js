const { errorResponse } = require('../utils/commonUtils')
const { UploadError } = require('./UploadError')
const { NotFoundError } = require('./NotFoundError')
const { ValidationError } = require('./ValidationError')
const { AuthenticationError } = require('./AuthenticationError')
const { AuthorizationError } = require('./AuthorizationError')
const { app_debug } = require('../../config/serverConfig')
const multer = require('multer')

exports.handleError = function handleError(app) {

    // Handle 404
    app.use((req, res, next) => next(new NotFoundError(`Requested URL was not found!`)))

    // Handle All Error
    app.use((err, req, res, next) => {

        if (res.headersSent) {
            return next('There was an unhandled error!')
        }

        if (err?.respond) {
            return err.respond(res)
        }

        if (err && err instanceof multer.MulterError) {
            const response = [{ 'msg': err.message || 'There was error while uploading file' }]
            return res.status(422).send(errorResponse(422, response))
        }

        const response = [{ msg: 'Internal Server Error' }]

        if (app_debug && app_debug === 'true') {
            response.push({ stackTrace: err.stack })
        }

        return res.status(500).send(errorResponse(500, response))
    })
}
