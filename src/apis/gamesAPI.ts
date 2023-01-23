import { typePersistance } from "@models/Core/persistan.type"
import GamesFactory from "@models/games/games.factory"
import { GameDTO } from "@models/games/games.interfaces"

class GamesAPI {
  private games

  constructor(){
    this.games = GamesFactory.getData(typePersistance.MONGO)
  }

  async get(id?: string | undefined) {
    return await this.games.get(id)
  }

  async add(game: GameDTO) {
    return await this.games.add(game)
  }

  async update(id: string, game: GameDTO) {
    return await this.games.update(id, game)
  }

  async delete(id: string) {
    return await this.games.delete(id)
  }
}

export default new GamesAPI()