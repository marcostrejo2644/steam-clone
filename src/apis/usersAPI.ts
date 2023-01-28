import { typePersistance } from '@models/Core/persistan.type'
import UsersFactory from '@models/users/users.factory'
import { UserCreateRequest, UserI } from '@models/users/users.interfaces'

class UsersAPI {
  private users

  constructor() {
    this.users = UsersFactory.getData(typePersistance.MONGO)
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

export default new UsersAPI()
