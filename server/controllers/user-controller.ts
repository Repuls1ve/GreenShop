import {Request, Response, NextFunction, response} from 'express'

import {IUserRegister, IUserLogin} from '../types/IUser'

import userService from '../services/user-service'

class UserController {
    async register(req: Request<{}, {}, IUserRegister>, res: Response, next: NextFunction) {
        try {
            const {username, email, password} = req.body
            const userData = await userService.register({
                username,
                email,
                password
            })
            res.json(userData)
        } catch (err) {
            next(err)
        }
    }

    async login(req: Request<{}, {}, IUserLogin>, res: Response, next: NextFunction) {
        try {
            const {email, password} = req.body
            const userData = await userService.login({
                email,
                password
            })
            res.json(userData)
        } catch (err) {
            next(err)
        }
    }

    async refresh(req: Request<{}, {}, {token: string}>, res: Response, next: NextFunction) {
        try {
            const {token} = req.body
            const userData = await userService.refresh(token)
            res.json(userData)
        } catch (err) {
            next(err)
        }
    }
}

export default new UserController