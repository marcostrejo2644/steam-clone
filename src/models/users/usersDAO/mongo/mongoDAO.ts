import mongoConnection from "@services/mongoDB"
import UserSchema from '@models/users/usersDAO/mongo/usersSchema'
import { UserCreateRequest, UserI } from '@models/users/users.interfaces'
import { CRUD } from "@core/CRUD.interface"

export class UserMongoPersistence implements CRUD<UserCreateRequest, string> {
  private User

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.User = mongoServer.model<UserCreateRequest>("Users", UserSchema)
  }

  async get(id?: string | undefined): Promise<UserI | UserI[] | null> {
    if(id) return await this.User.findById(id)
    return await this.User.find()
  }

  async add(object: UserCreateRequest): Promise<UserCreateRequest | null> {
    const newUser = new this.User(object)
    return await newUser.save()
  }

  async update(id: string, object: UserI): Promise<UserI | null> {
    return await this.User.findByIdAndUpdate(id, object)
  }
  
  async delete(id: string): Promise<UserI | null> {
    return await this.User.findByIdAndUpdate(id)
  }
}
