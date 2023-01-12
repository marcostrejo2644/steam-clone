import  { gamesMongoPersistance } from "@models/games/gamesDAO/mongo/mongoDAO"
import { typePersistance } from "@models/games/games.interfaces"
import { Logger } from "@utils/logger"

export default class gamesFactory{
  static getData(type: typePersistance){
    switch(type){
      case typePersistance.MONGO:
        Logger.info('Mongo has been selected for persistance')
        return new gamesMongoPersistance()
      default:
        Logger.info('Mongo has been selected for default')
        return new gamesMongoPersistance()
    }
  }
}
