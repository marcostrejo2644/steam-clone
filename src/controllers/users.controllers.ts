import dayjs from 'dayjs'
import { NextFunction, Request, Response } from 'express'
import { UserAPI } from '@apis/usersAPI'
import { UserCreateRequest } from '@models/users/users.interfaces'
import AbstractPersistenceFactory from '@core/Persistence/persistenceFactory.interface'
import { MongoFactory } from '@core/Persistence/mongoFactory'

export class UserController {
  private factory: AbstractPersistenceFactory
  private userAPI: UserAPI

  constructor() {
    this.factory = new MongoFactory()
    this.userAPI = new UserAPI(this.factory)
  }

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id = undefined } = req.params
      const users = await this.userAPI.get(id)
      res.status(200).json({ data: users })
    } catch (error) {
      next(error)
    }
  }

  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, username, thirdParty, updateDate } = req.body
      const user: UserCreateRequest = {
        email,
        username,
        thirdParty: [thirdParty],
        createdDate: dayjs(),
        updateDate: dayjs(updateDate)
      }
      await this.userAPI.add(user)
      res.status(200).json({ message: 'User created succesfully', user })
    } catch (error) {
      next(error)
    }
  }

  update = async () => { }

  delete = async () => { }
}