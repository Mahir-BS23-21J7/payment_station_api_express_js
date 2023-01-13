const { errorResponse } = require('../utils/commonUtils')

class UploadError extends Error {
    statusCode = 422
    constructor(message = 'Upload Error') {
        super(message)
        this.name = this.constructor.name
    }
    respond(res) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}

exports.UploadError = UploadError