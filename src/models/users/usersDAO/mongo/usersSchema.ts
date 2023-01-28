import { UserI } from '@models/users/users.interfaces'
import { Schema } from 'mongoose'

const UserSchema = new Schema<UserI>({
  id: String,
  email: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  profilePicture: {
    type: String,
  },
  customURL: String,
  thirdParty: {
    type: [String],
    require: true
  },
  updateDate: Date,
  description: String,
  gameLibrary: {
    type: [String],
    default: []
  },
  isDeveloper: {
    type: Boolean,
    default: false
  },
  gamesCreated: {
    type: [String],
    default: []
  },
  createdDate: Date
})

export default UserSchema
