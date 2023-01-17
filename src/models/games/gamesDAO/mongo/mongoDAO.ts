import mongoConnection from "@services/mongoDB";
import { GameI } from "@models/games/games.interfaces";
import gameSchema from "@models/games/gamesDAO/mongo/mongoSchema";
import { Logger } from "@utils/logger";
import { CRUD } from "@models/Core/CRUD.interface";
export class GamesMongoPersistance implements CRUD<GameI> {
  private Games;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Games = mongoServer.model<GameI>('Games', gameSchema) 
  }
  delete(id: string): Promise<null> {
    throw new Error("Method not implemented.");
  }
  add(object: GameI): Promise<GameI | null> {
    throw new Error("Method not implemented.");
  }
  update(object: GameI, id: string): Promise<GameI> {
    throw new Error("Method not implemented.");
  }
  
  async get(): Promise<GameI | GameI[] | null> {
    return null
  } 
}
