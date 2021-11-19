import jwt from 'jsonwebtoken'

import Exception from '../exceptions/api-exception'

class TokenService {
    createToken(payload: object) {
        const token = jwt.sign(payload, process.env.JWT_SECRET!, {expiresIn: '7d'})
        return token
    }

    verifyToken(token: string): any {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET!)
            return decoded
        }
        catch (err) {
            throw Exception.Unauthorized()
        }
    }
}

export default new TokenService()