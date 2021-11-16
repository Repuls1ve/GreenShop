import {AxiosResponse} from 'axios'
import {IProduct} from '../models/IProduct'
import $api from '../http'

class ProductsService {
    static async getProducts(): Promise<AxiosResponse<IProduct[]>> {
        return $api.get('/products')
    }
}

export default ProductsService