const { errorResponse } = require('../utils/commonUtils')

class NotFoundError extends Error {
    statusCode = 404
    constructor(message = 'Not Found') {
        super(message)
        this.name = this.constructor.name
    }
    respond(res) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}

exports.NotFoundError = NotFoundError