import { Router } from 'express'
import usersControllers from '@controllers/users.controllers'

const router = Router()

router.get('/:id?', usersControllers.get)
router.post('/', usersControllers.add)
router.put('/:id', usersControllers.update)
router.delete('/:id', usersControllers.delete)

export default router
