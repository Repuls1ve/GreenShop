import {Schema, model} from 'mongoose'

import {IUser} from '../types/IUser'

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    address: {
        country: String,
        city: String,
        street: String,
        state: String,
        zip: String
    },
    phone: {
        type: String
    },
    cart: {
        type: [],
        default: []
    }
})

const User = model('User', userSchema)

export default User