import mongoConnection from "@services/mongoDB";
import { gameI, gameFunctionality } from "@models/games/games.interfaces";
import gameSchema from "@models/games/gamesDAO/mongo/mongoSchema";
import { Logger } from "@utils/logger";

export class gamesMongoPersistance implements gameFunctionality {
  private Games;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Games = mongoServer.model<gameI>('Games', gameSchema) 
  }
  
  async getGame(): Promise<null | gameI> {
    return null
  }

  async addGame(game: gameI): Promise<void>{
  }

  async updateGame(game: gameI): Promise<void> {
  }

  async deteleGame(id: string): Promise<void> {
  }   
}
