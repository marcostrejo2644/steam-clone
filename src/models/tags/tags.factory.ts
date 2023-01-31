import { TypePersistence } from "@core/persistence.type";
import { Logger } from "@utils/logger";
import { TagMongoPersistence } from "./tagsDAO/mongo/mongoDAO";


export default class TagFactory {
  static getData(type: TypePersistence) {
    switch(type){
      case TypePersistence.MONGO :
        Logger.info('Mongo has been selected for persistence')
        return new TagMongoPersistence()
      default :
        Logger.info('Mongo has been selected for default')
        return new TagMongoPersistence()
    }
  }
}