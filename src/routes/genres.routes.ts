import { GenreController } from '@controllers/genres.controllers'
import { Router } from 'express'

const genreCtrlIns = new GenreController()
const router = Router()

router.get('/:id?', genreCtrlIns.get)
router.post('/', genreCtrlIns.add)
router.put('/:id', genreCtrlIns.update)
router.delete('/:id', genreCtrlIns.delete)

export default router