import dayjs from 'dayjs'
import { NextFunction, Request, Response } from 'express'
import usersAPI from '@apis/usersAPI'
import { UserCreateRequest } from '@models/users/users.interfaces'

class UsersControllers {
  constructor() {}

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id = undefined } = req.params
      const users = await usersAPI.get(id)
      res.status(200).json({ data: users })
    } catch (error) {
      next(error)
    }
  }

  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, username, thirdParty, updateDate } = req.body
      const user: UserCreateRequest = {
        email,
        username,
        thirdParty: [thirdParty],
        createdDate: dayjs(),
        updateDate: dayjs(updateDate)
      }
      await usersAPI.add(user)
      res.status(200).json({ message: 'User created succesfully', user })
    } catch (error) {
      next(error)
    }
  }

  async update(){}

  async delete(){}

}

export default new UsersControllers()
