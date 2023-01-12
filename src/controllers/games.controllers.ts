import gamesAPI from "@apis/gamesAPI"
import { gameFunctionality, gameI } from "@models/games/games.interfaces"

class gamesController implements gameFunctionality{
  constructor(){}

  async getGame(gameId?: string | undefined): Promise<gameI | null> { return null }

  async addGame(game: gameI): Promise<void> {}

  async updateGame(game: gameI): Promise<void> {}

  async deteleGame(id: string): Promise<void> {}


}

export default new gamesController()
