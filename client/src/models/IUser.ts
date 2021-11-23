import {IProduct} from './IProduct'

export type address = {
    country: string
    city: string
    street: string
    state: string
    zip: string
}

export interface IUser {
    username: string
    email: string
    firstName: string
    lastName: string
    address: address
    phone: string
    cart: IProduct[]
}

export interface IUserRegister {
    username: IUser['username']
    email: IUser['email']
    password: string
}

export interface IUserLogin {
    email: IUser['email']
    password: string
}

export interface IUserChangePassword {
    current: string
    new: string
}

export interface IUserEdit {
    firstName: IUser['firstName']
    lastName: IUser['lastName']
    phone: IUser['phone']
    address: IUser['address']
}