import { Router } from 'express'
import gamesRoute from '@routes/games.routes'
import genreRoute from '@routes/genres.routes'
import tagsRoute from '@routes/tag.routes'

const router = Router()

router.use('/games', gamesRoute)
router.use('/genres', genreRoute)
router.use("/tags", tagsRoute)

export default router
