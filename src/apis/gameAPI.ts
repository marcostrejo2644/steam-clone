import AbstractPersistenceFactory from "@core/Persistence/persistenceFactory.interface"
import { GameI } from "@models/games/games.interfaces"

export class GameAPI {
  private games

  constructor(factory: AbstractPersistenceFactory){
    this.games = factory.createGame()
  }

  async get(id?: string | undefined) {
    return await this.games.get(id)
  }

  async add(game: GameI) {
    return await this.games.add(game)
  }

  async update(id: string, game: GameI) {
    return await this.games.update(id, game)
  }

  async delete(id: string) {
    return await this.games.delete(id)
  }
}