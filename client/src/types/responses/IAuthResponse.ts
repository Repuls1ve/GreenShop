import {IUser} from '../../models/IUser'

export interface IAuthSuccessResponse {
    user: IUser
}

export interface IAuthErrorResponse {
    error: number
    message: string
}