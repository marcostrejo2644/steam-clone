import { TypePersistence } from "@core/persistence.type";
import { Logger } from "@utils/logger";
import { GenreMongoPersistence } from "./genresDAO/mongo/mongoDAO";


export default class GenreFactory {
    static getData(type: TypePersistence) {
        switch(type) {
            case TypePersistence.MONGO : 
                Logger.info('Mongo has been selected for persistence')
                return new GenreMongoPersistence()
            default : 
                Logger.info('Mongo has been selected for default')
                return new GenreMongoPersistence()
        }

    }
}