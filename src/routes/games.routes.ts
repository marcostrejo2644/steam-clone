import { Router } from 'express'
import gameController from '@controllers/games.controllers'

const router = Router()

router.get('/', gameController.getGame)

export default router
