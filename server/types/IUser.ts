import {Document} from 'mongoose'
import {IProduct} from './IProduct'

export type address = {
    country: string,
    city: string,
    street: string,
    state: string
    zip: string
}

export interface IUser extends Document {
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: address,
    phone: string,
    cart: IProduct[]
}