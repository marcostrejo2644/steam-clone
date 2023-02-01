import { Router } from 'express'
import { UserController } from '@controllers/users.controllers'

const UserCtrlIns = new UserController()
const router = Router()

router.get('/:id?', UserCtrlIns.get)
router.post('/', UserCtrlIns.add)
router.put('/:id', UserCtrlIns.update)
router.delete('/:id', UserCtrlIns.delete)

export default router