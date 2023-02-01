import { Router } from 'express'
import { GameController } from '@controllers/games.controllers'

const gameCtrlIns = new GameController()
const router = Router()

router.get('/:id?', gameCtrlIns.get) 
router.post('/', gameCtrlIns.add)
router.put('/:id', gameCtrlIns.update)
router.delete('/:id', gameCtrlIns.delete)

export default router
