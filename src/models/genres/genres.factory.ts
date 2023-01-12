import { typePersistance } from "@models/Core/persistan.type";
import { Logger } from "@utils/logger";
import { GenreMongoPersistance } from "./genresDAO/mongo/mongoDAO";


export default class GenreFactory {
    static getData(type: typePersistance) {
        switch(type) {
            case typePersistance.MONGO : 
                Logger.info('Mongo has been selected for persistance')
                return new GenreMongoPersistance()
            default : 
                Logger.info('Mongo has been selected for default')
                return new GenreMongoPersistance()
        }

    }
}