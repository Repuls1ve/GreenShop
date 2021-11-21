import {Router} from 'express'

import userController from '../controllers/user-controller'
import authMiddleware from '../middlewares/auth-middleware'

const router = Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/refresh', authMiddleware, userController.refresh)

export default router