import { TagController } from '@controllers/tags.controllers'
import { Router } from 'express'

const tagControllerIns = new TagController()
const router = Router()

router.get('/:id?', tagControllerIns.get)
router.post('/', tagControllerIns.add)
router.put('/:id', tagControllerIns.update)
router.delete('/:id', tagControllerIns.delete)

export default router