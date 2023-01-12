import gamesAPI from "@apis/gamesAPI"
import { CRUD } from "@models/Core/CRUD.interface"
import { GameI } from "@models/games/games.interfaces"

class gamesController implements CRUD<GameI>{
  constructor(){}
  get(): Promise<any> {
    throw new Error("Method not implemented.")
  }
  add(object: GameI): Promise<any> {
    throw new Error("Method not implemented.")
  }
  update(object: GameI, id: string): Promise<GameI> {
    throw new Error("Method not implemented.")
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.")
  }

  // async getGame(gameId?: string | undefined): Promise<gameI | null> { return null }

  // async addGame(game: gameI): Promise<void> {}

  // async updateGame(game: gameI): Promise<void> {}

  // async deteleGame(id: string): Promise<void> {}


}

export default new gamesController()
