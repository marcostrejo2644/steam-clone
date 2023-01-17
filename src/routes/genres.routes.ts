import genresControllers from '@controllers/genres.controllers'
import { Router } from 'express'

const router = Router()

router.get('/:id?', genresControllers.get)
router.post('/', genresControllers.add)
router.put('/:id', genresControllers.update)
router.delete('/:id', genresControllers.delete)

export default router