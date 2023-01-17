import tagsControllers from '@controllers/tags.controllers'
import { Router } from 'express'

const router = Router()

router.get('/:id?', tagsControllers.get)
router.post('/', tagsControllers.add)
router.put('/:id', tagsControllers.update)
router.delete('/:id', tagsControllers.delete)

export default router