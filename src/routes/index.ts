import { Router } from 'express'
import gamesRoute from '@routes/games.routes'

const router = Router()

router.use('/games', gamesRoute)

export default router
