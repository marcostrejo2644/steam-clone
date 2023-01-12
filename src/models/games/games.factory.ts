import { GamesMongoPersistance } from "@models/games/gamesDAO/mongo/mongoDAO"
import { typePersistance } from "@models/Core/persistan.type"
import { Logger } from "@utils/logger"

export default class GamesFactory{
  static getData(type: typePersistance){
    switch(type){
      case typePersistance.MONGO:
        Logger.info('Mongo has been selected for persistance')
        return new GamesMongoPersistance()
      default:
        Logger.info('Mongo has been selected for default')
        return new GamesMongoPersistance()
    }
  }
}
