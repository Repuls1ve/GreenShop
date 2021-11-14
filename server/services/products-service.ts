import {IProduct} from '../types/IProduct'

import Product from '../models/product-model'

class ProductsService {
    async getProducts(): Promise<IProduct[]> {
        const products = await Product.find()
        return products
    }

    async addProduct(product: IProduct): Promise<IProduct> {
        const createdProduct = await Product.create(product)
        return createdProduct
    }
}

export default new ProductsService()