import {Request} from 'express'
import {IUserLogged} from '../IUser'

export interface IAuthRequest extends Request {
    user?: IUserLogged
}