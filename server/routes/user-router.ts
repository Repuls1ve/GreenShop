import {Router} from 'express'

import userController from '../controllers/user-controller'

const router = Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/refresh', userController.refresh)

export default router