import {Router} from 'express'
import {getStateAndValidity} from '../controllers/cardController.js'
import {basicAuthMiddleware} from '../middleware/authMiddleware.js'

const router = Router()

router.get('/card/validate/:cardNumber', basicAuthMiddleware, getStateAndValidity)

export default router