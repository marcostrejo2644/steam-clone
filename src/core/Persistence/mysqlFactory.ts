import { CRUD } from "@core/CRUD.interface";
import { GameI } from "@models/games/games.interfaces";
import { GenreI } from "@models/genres/genres.interfaces";
import { TagI } from "@models/tags/tags.interfaces";
import { Logger } from "@utils/logger";

import AbstractPersistenceFactory from "./persistenceFactory.interface";

export class MySQLFactory implements AbstractPersistenceFactory {
  constructor () {
    Logger.info('MySQL has been selected for persistence')
  }

  createGame(): CRUD<GameI> {
    throw new Error("Method not implemented.");
  }
  createTag(): CRUD<TagI> {
    throw new Error("Method not implemented.");
  }
  createGenre(): CRUD<GenreI> {
    throw new Error("Method not implemented.");
  }
}