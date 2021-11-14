import {Schema, model} from 'mongoose'

import {IProduct} from '../types/IProduct'

const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        required: true
    },
    prices: {
        type: [{
            size: String,
            cost: String
        }],
        required: true
    },
    sizes: {
        type: [String],
        required: true
    },
    sku: {
        type: Number,
        required: true,
        unique: true
    },
    categories: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    images: {
        type: [String],
        required: true
    }
})

const Product = model('Product', productSchema)

export default Product