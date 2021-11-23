import {Router} from 'express'

import userController from '../controllers/user-controller'
import authMiddleware from '../middlewares/auth-middleware'

const router = Router()

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/refresh', authMiddleware, userController.refresh)
router.get('/logout', userController.logout)

router.put('/password', authMiddleware, userController.changePassword)
router.put('/edit', authMiddleware, userController.edit)

export default router