class AuthorizationError extends Error {
    statusCode = 401
    constructor(message = 'Authorization Error') {
        super(message)
        this.name = this.constructor.name
    }
    respond(res) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}

exports.AuthorizationError = AuthorizationError