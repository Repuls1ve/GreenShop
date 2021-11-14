import {Document} from 'mongoose'

export type categorie =
    'House Plants' | 'Potter Plants' | 'Seeds' |
    'Small Plants' | 'Big Plants' | 'Succulents' |
    'Terrariums' | 'Gardening' | 'Accessories'

export type size = 'Small' | 'Medium' | 'Large'

export type price = {
    size: size
    cost: string
}

export interface IProduct extends Document {
    title: string
    prices: price[]
    sizes: size[]
    sku: number
    categories: categorie[]
    tags: string[]
    images: string[]
}