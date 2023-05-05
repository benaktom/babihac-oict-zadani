import {Router} from 'express'
import {getStateAndValidity} from '../controllers/cardController.js'
import {basicAuthMiddleware} from '../middleware/authMiddleware.js'

const router = Router()

// [CR] rest api by nemelo pouzivat sloveso v url, protoze to neni akce, ale resource, navic se tu nic nevalidule, ale ziskava se stav karty
router.get('/card/validate/:cardNumber', basicAuthMiddleware, getStateAndValidity)

export default router