import {Router} from 'express'
import { getStatus } from '../controllers/statusController.js'

const router = Router()

router.get('/status', getStatus)

export default router