const { errorResponse } = require('../utils/commonUtils')

class ValidationError extends Error {
    statusCode = 400
    errors = []
    constructor(message = 'Validation Error', errors = []) {
        super(message)
        this.name = this.constructor.name
        this.errors = errors
    }
    respond(res) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}

exports.ValidationError = ValidationError