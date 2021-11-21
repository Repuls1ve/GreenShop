import {AxiosResponse} from 'axios'
import {IUserRegister, IUserLogin} from '../models/IUser'
import {IAuthSuccessResponse} from '../types/responses/IAuthResponse'

import $api from '../http'

class UserService {
    static async register(credentials: IUserRegister): Promise<AxiosResponse<IAuthSuccessResponse>> {
        return $api.post('/user/register', {
            username: credentials.username,
            email: credentials.email,
            password: credentials.password
        })
    }
    static async login(credentials: IUserLogin): Promise<AxiosResponse<IAuthSuccessResponse>> {
        return $api.post('/user/login', {
            email: credentials.email,
            password: credentials.password
        })
    }
    static async refresh(): Promise<AxiosResponse<IAuthSuccessResponse>> {
        return $api.post('/user/refresh')
    }

    static async logout(): Promise<void> {
        return $api.get('/user/logout')
    }
}

export default UserService