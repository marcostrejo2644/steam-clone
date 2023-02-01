import mongoConnection from "@services/mongoDB";
import { GameI } from "@models/games/games.interfaces";
import gameSchema from "@models/games/gamesDAO/mongo/gamesSchema";
import { CRUD } from "@core/CRUD.interface";

export class GameMongoPersistence implements CRUD<GameI, string> {
  private Games;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Games = mongoServer.model<GameI>('Games', gameSchema)
  }

  async get(id?: string | undefined): Promise<GameI | GameI[] | null> {
    try {
      if(id) return await this.Games.findById(id)
      return await this.Games.find()
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }

  async add(entity: GameI): Promise<GameI | null> {
    try {
      const newGames = new this.Games(entity)
      return await newGames.save()
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }

  async update(id: string, entity: GameI): Promise<GameI | null> {
    try {
      return await this.Games.findByIdAndUpdate(id , entity)
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }

  async delete(id: string): Promise<GameI | null> {
    try {
      return await this.Games.findByIdAndDelete(id)
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }
}
