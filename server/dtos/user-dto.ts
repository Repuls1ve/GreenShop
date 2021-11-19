import {IUser, IUserDto} from '../types/IUser'

const userDto = (user: IUser): IUserDto => {
    return {
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        phone: user.phone,
        cart: user.cart
    }
}

export default userDto