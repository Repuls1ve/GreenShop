import {Response, NextFunction} from 'express'
import {IAuthRequest} from '../types/requests/IAuthRequest'

import tokenService from '../services/token-service'
import userDto from '../dtos/user-dto'

import Exception from '../exceptions/api-exception'

const authMiddleware = (req: IAuthRequest, res: Response, next: NextFunction) => {
    try {
        const {token} = req.cookies
        if (!token) {
            throw Exception.Unauthorized()
        }
        const decoded = tokenService.verifyToken(token)
        const userData = userDto(decoded)
        req.user = {user: userData, token}
        next()
    } catch (err) {
        next(err)
    }
}

export default authMiddleware