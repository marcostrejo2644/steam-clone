import { typePersistance } from "@models/Core/persistan.type";
import { Logger } from "@utils/logger";
import { TagsMongoPersistance } from "./tagsDAO/mongo/mongoDAO";


export default class TagFactory {
  static getData(type: typePersistance) {
    switch(type){
      case typePersistance.MONGO :
        Logger.info('Mongo has been selected for persistance')
        return new TagsMongoPersistance()
      default :
        Logger.info('Mongo has been selected for default')
        return new TagsMongoPersistance()
    }
  }
}