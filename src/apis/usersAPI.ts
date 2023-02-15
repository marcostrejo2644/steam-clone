import AbstractPersistenceFactory from '@core/Persistence/persistenceFactory.interface'
import { UserCreateRequest, UserI } from '@models/users/users.interfaces'

export class UserAPI {
  private users

  constructor(factory: AbstractPersistenceFactory) {
    this.users = factory.createUser()
  }

  async get(id?: string | undefined) {
    return await this.users.get(id)
  }

  async add(user: UserCreateRequest) {
    return await this.users.add(user)
  }

  async update(id: string, user: UserI) {
    return await this.users.update(id, user)
  }

  async delete(id: string) {
    return await this.users.delete(id)
  }
}