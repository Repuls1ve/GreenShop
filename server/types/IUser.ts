import {Document} from 'mongoose'
import {IProduct} from './IProduct'

export type address = {
    country: string
    city: string
    street: string
    state: string
    zip: string
}

export interface IUser extends Document {
    username: string
    email: string
    password: string
    firstName: string
    lastName: string
    address: address
    phone: string
    cart: IProduct[]
}

export interface IUserDto {
    username: IUser['username']
    email: IUser['email']
    firstName: IUser['firstName']
    lastName: IUser['lastName']
    address: IUser['address']
    phone: IUser['phone']
    cart: IUser['cart']
}

export interface IUserRegister {
    username: IUser['username']
    email: IUser['email']
    password: IUser['password']
}

export interface IUserLogin {
    email: IUser['email']
    password: IUser['password']
}

export interface IUserLogged {
    user: IUserDto
    token: string
}