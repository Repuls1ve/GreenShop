import {AxiosResponse} from 'axios'
import {IUserRegister, IUserLogin, IUserChangePassword} from '../models/IUser'
import {IAuthSuccessResponse} from '../types/responses/IAuthResponse'
import {IDefaultSuccessResponse} from '../types/responses/IDefaultResponse'

import $api from '../http'

class UserService {
    static async register(credentials: IUserRegister): Promise<AxiosResponse<IAuthSuccessResponse>> {
        return $api.post('/user/register', credentials)
    }

    static async login(credentials: IUserLogin): Promise<AxiosResponse<IAuthSuccessResponse>> {
        return $api.post('/user/login', credentials)
    }

    static async refresh(): Promise<AxiosResponse<IAuthSuccessResponse>> {
        return $api.post('/user/refresh')
    }

    static async logout(): Promise<AxiosResponse<IDefaultSuccessResponse>> {
        return $api.get('/user/logout')
    }

    static async changePassword(credentials: IUserChangePassword): Promise<AxiosResponse<IDefaultSuccessResponse>> {
        return $api.put('/user/password', credentials)
    }
}

export default UserService