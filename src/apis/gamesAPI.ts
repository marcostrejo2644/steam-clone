import { typePersistance } from "@models/Core/persistan.type"
import GamesFactory from "@models/games/games.factory"

class GamesAPI {
  private games

  constructor(){
    this.games = GamesFactory.getData(typePersistance.MONGO)
  }
}

export default new GamesAPI()