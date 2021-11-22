import {Request} from 'express'
import {IUserLogged} from '../IUser'

export interface IAuthRequest<T = any> extends Request<{}, {}, T> {
    user?: IUserLogged
}