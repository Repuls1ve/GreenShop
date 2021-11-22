import bcrypt from 'bcrypt'

import {IUserRegister, IUserLogged, IUserLogin, IUserDto, IUser} from '../types/IUser'
import User from '../models/user-model'
import userDto from '../dtos/user-dto'

import Exception from '../exceptions/api-exception'

import tokenService from './token-service'

class UserService {
    async register(data: IUserRegister): Promise<IUserLogged> {
        const candidate = await User.findOne({email: data.email})
        if (candidate) {
            throw Exception.Forbidden('User with this email already exists')
        }
        const passwordHash = await bcrypt.hash(data.password, 12)
        const user = await User.create({
            username: data.username,
            email: data.email,
            password: passwordHash
        })
        const userData = userDto(user)
        const token = tokenService.createToken(userData)
        return {user: userData, token}
    }

    async login(data: IUserLogin): Promise<IUserLogged> {
        const user = await User.findOne({email: data.email})
        if (!user) {
            throw Exception.Forbidden('User with this email does not exist')
        }
        const isPasswordEquals = await bcrypt.compare(data.password, user.password)
        if (!isPasswordEquals) {
            throw Exception.Forbidden('Incorrect password')
        }
        const userData = userDto(user)
        const token = tokenService.createToken(userData)
        return {user: userData, token}
    }

    async refresh(data: IUserDto): Promise<IUserLogged> {
        const userData = await User.findOne({email: data.email})
        if (!userData) {
            throw Exception.NotFound('The user was probably deleted')
        }
        const userRefreshed = userDto(userData)
        const newToken = tokenService.createToken(userRefreshed)
        return {user: userRefreshed, token: newToken}
    }

    async changePassword(user: IUserDto, current: IUser['password'], newPassword: IUser['password']) {
        if (current === newPassword) {
            throw Exception.Forbidden('Your new password cannot match your current one')
        }
        const userData = await User.findOne({email: user.email})
        if (!userData) {
            throw Exception.NotFound('It is likely that your profile no longer exists')
        }
        const isPasswordEquals = await bcrypt.compare(current, userData.password)
        if (!isPasswordEquals) {
            throw Exception.Forbidden('You entered your current password incorrectly')
        }
        userData.password = await bcrypt.hash(newPassword, 12)
        await userData.save()
    }
}

export default new UserService()