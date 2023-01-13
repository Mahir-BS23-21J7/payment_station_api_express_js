const { errorResponse } = require('../utils/commonUtils')

class AuthenticationError extends Error {
    statusCode = 403
    constructor(message = 'Authentication Error') {
        super(message)
        this.name = this.constructor.name
    }
    respond(res) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}

exports.AuthenticationError = AuthenticationError