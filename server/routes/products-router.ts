import {Router} from 'express'

import productsController from '../controllers/products-controller'

const router = Router()

router.get('/products', productsController.getProducts)
router.post('/addProduct', productsController.addProduct)

export default router