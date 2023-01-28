import { typePersistance } from '@models/Core/persistan.type'
import { Logger } from '@utils/logger'
import UsersMongoPersistance from '@models/users/usersDAO/mongo/mongoDAO'

export default class UsersFactory {
  static getData(type: typePersistance) {
    switch (type) {
      case typePersistance.MONGO:
        Logger.info('Mongo has been selected for persistance')
        return new UsersMongoPersistance()
      default:
        Logger.info('Mongo has been selected for default')
        return new UsersMongoPersistance()
    }
  }
}
