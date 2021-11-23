import {Request, Response, NextFunction} from 'express'

import {IAuthRequest} from '../types/requests/IAuthRequest'
import {IUserRegister, IUserLogin, IUserChangePassword, IUserEdit} from '../types/IUser'

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
            res.cookie('token', userData.token, {httpOnly: true})
            res.json({user: userData.user})
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
            res.cookie('token', userData.token, {httpOnly: true})
            res.json({user: userData.user})
        } catch (err) {
            next(err)
        }
    }

    async refresh(req: IAuthRequest, res: Response, next: NextFunction) {
        try {
            const user = req.user!
            const userRefreshed = await userService.refresh(user.user)
            res.cookie('token', userRefreshed.token, {httpOnly: true})
            res.json({user: userRefreshed.user})
        } catch (err) {
            next(err)
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            res.clearCookie('token')
            res.json({message: 'Logout success'})
        } catch (err) {
            next(err)
        }
    }

    async changePassword(req: IAuthRequest<IUserChangePassword>, res: Response, next: NextFunction) {
        try {
            const user = req.user!
            const {...password} = req.body
            await userService.changePassword(user.user, password.current, password.new)
            res.json({message: 'Password successfully changed.'})
        } catch (err) {
            next(err)
        }
    }

    async edit(req: IAuthRequest<IUserEdit>, res: Response, next: NextFunction) {
        try {
            const user = req.user!
            const {...fields} = req.body
            const editedUser = await userService.edit(user.user, fields)
            res.json({user: editedUser, message: 'Personal information updated'})
        } catch (err) {
            next(err)
        }
    }
}

export default new UserController