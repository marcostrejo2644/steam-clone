import { Router } from 'express'
import gamesRoute from '@routes/games.routes'
import genreRoute from '@routes/genres.routes'

const router = Router()

router.use('/games', gamesRoute)
router.use('/genres', genreRoute)

export default router
