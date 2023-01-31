import mongoConnection from "@services/mongoDB";
import { GameI } from "@models/games/games.interfaces";
import gameSchema from "@models/games/gamesDAO/mongo/mongoSchema";
import { CRUD } from "@core/CRUD.interface";

export class GameMongoPersistence implements CRUD<GameI> {
  private Games;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Games = mongoServer.model<GameI>('Games', gameSchema)
  }

  async get(id?: string | undefined): Promise<GameI | GameI[] | null> {
    if(id) return await this.Games.findById(id)
    return await this.Games.find()
  }

  async add(object: GameI): Promise<GameI | null> {
    const newGames = new this.Games(object)
    return await newGames.save()
  }

  async update(id: string, object: GameI): Promise<GameI | null> {
    return await this.Games.findByIdAndUpdate(id , object)
  }

  async delete(id: string): Promise<null> {
    return await this.Games.findByIdAndDelete(id)
  }
}
