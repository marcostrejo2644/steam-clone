import { Router } from 'express'
import gameController from '@controllers/games.controllers'

const router = Router()

router.get('/', gameController.get) 
router.post('/', gameController.add)
router.put('/:id', gameController.update)
router.delete('/:id', gameController.delete)

export default router
