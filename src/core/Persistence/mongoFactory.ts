import { Logger } from "@utils/logger"

import AbstractPersistenceFactory from "./persistenceFactory.interface"

import { GameMongoPersistence } from "@models/games/gamesDAO/mongo/mongoDAO"
import { GenreMongoPersistence } from "@models/genres/genresDAO/mongo/mongoDAO"
import { TagMongoPersistence } from "@models/tags/tagsDAO/mongo/mongoDAO"
import { UserMongoPersistence } from "@models/users/usersDAO/mongo/mongoDAO"

export class MongoFactory implements AbstractPersistenceFactory {
  constructor () {
    Logger.info('Mongo has been selected for persistence')
  }

  createUser(): UserMongoPersistence {
    return new UserMongoPersistence()
  }

  public createTag(): TagMongoPersistence {
    return new TagMongoPersistence()
  }

  public createGenre() {
    return new GenreMongoPersistence()
  }

  public createGame() {
    return new GameMongoPersistence()
  } 
}