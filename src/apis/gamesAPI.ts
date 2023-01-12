import gamesFactory from "@models/games/games.factory"
import { typePersistance, gameFunctionality } from "@models/games/games.interfaces"

class gamesAPI{
  private games

  constructor(){
    this.games = gamesFactory.getData(typePersistance.MONGO)
  }
}

export default new gamesAPI()
