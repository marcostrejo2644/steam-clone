import mongoConnection from "@services/mongoDB";
import { GameDTO } from "@models/games/games.interfaces";
import gameSchema from "@models/games/gamesDAO/mongo/mongoSchema";
import { CRUD } from "@models/Core/CRUD.interface";
// import { Logger } from "@utils/logger";
// import gamesJSON from "../../../../test/JSON/games.json"
// import { TagsMongoPersistance } from "@models/tags/tagsDAO/mongo/mongoDAO";
// import { GenreMongoPersistance } from "@models/genres/genresDAO/mongo/mongoDAO";
// import { GenreDTO } from "@models/genres/genres.interfaces";
// import { TagDTO } from "@models/tags/tags.interfaces";
export class GamesMongoPersistance implements CRUD<GameDTO> {
  private Games;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Games = mongoServer.model<GameDTO>('Games', gameSchema) 
    // this.bulk()
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

  // call inside constructor
  // private async bulk() {
  //   function getMultipleRandom(arr: any[]) {
  //     const shuffled = [...arr].sort(() => 0.5 - Math.random());
    
  //     return shuffled.slice(0, Math.floor(Math.random() * arr.length/3));
  //   }

  //   function randomDate(start: Date) {
  //     const end = new Date()
  //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString()
  //   }

  //   const gamesCount = await this.Games.count();
    
  //   try {
  //     if(!gamesCount) {
  //       const Tag = new TagsMongoPersistance()
  //       const Genre = new GenreMongoPersistance()
  //       const tags = await Tag.get() as TagDTO[];
  //       const genres = await Genre.get() as GenreDTO[];
  //       const games = gamesJSON.map(game => {
  //         game.releaseDate = randomDate(new Date(2018,4,5));
  //         game.genre = genres[Math.floor(Math.random() * genres.length)]._id!;
  //         game.tags = getMultipleRandom(tags).map(tag => tag._id!) as never[];
  //         game.sells = Math.floor(Math.random() * 100000);
  //         game.reviews.positives = Math.floor(Math.random() * 1000);
  //         game.reviews.negatives = Math.floor(Math.random() * 1000);
  //         return game
  //       })
  //       this.Games.insertMany(games)
  //     }
  //   } catch (error: any) {
  //     Logger.error(error.message)
  //   }
  // }
}
