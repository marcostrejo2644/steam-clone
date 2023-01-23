import mongoConnection from "@services/mongoDB";
import { GameDTO } from "@models/games/games.interfaces";
import gameSchema from "@models/games/gamesDAO/mongo/mongoSchema";
import { CRUD } from "@models/Core/CRUD.interface";

export class GamesMongoPersistance implements CRUD<GameDTO> {
  private Games;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Games = mongoServer.model<GameDTO>('Games', gameSchema) 
  }

  async get(id?: string | undefined): Promise<GameDTO | GameDTO[] | null> {
    if(id) return await this.Games.findById(id)

    return await this.Games.find();
  }

  async add(object: GameDTO): Promise<GameDTO | null> {
    const newGames = new this.Games(object)
    return await newGames.save()
  }

  async update(id: string, object: GameDTO): Promise<GameDTO | null> {
    return await this.Games.findByIdAndUpdate(id , object)
  }

  async delete(id: string): Promise<null> {
    return await this.Games.findByIdAndDelete(id)
  }
}
