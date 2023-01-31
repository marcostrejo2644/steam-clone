import { GameMongoPersistence } from "@models/games/gamesDAO/mongo/mongoDAO"
import { TypePersistence } from "@core/persistence.type"
import { Logger } from "@utils/logger"

export default class GamesFactory{
  static getData(type: TypePersistence){
    switch(type){
      case TypePersistence.MONGO:
        Logger.info('Mongo has been selected for persistence')
        return new GameMongoPersistence()
      default:
        Logger.info('Mongo has been selected for default')
        return new GameMongoPersistence()
    }
  }
}
