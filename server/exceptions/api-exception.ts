class Exception extends Error {
    status: number

    constructor(status: number, message: string) {
        super(message)
        this.status = status
    }

    static BadRequest(message: string) {
        return new Exception(400, message)
    }

    static Unauthorized() {
        return new Exception(401, 'User is not authorized')
    }

    static Forbidden(message: string) {
        return new Exception(403, message)
    }
}

export default Exception