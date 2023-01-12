import { typePersistance } from "@models/Core/persistan.type";
import GenreFactory from "@models/genres/genres.factory";

class GenresAPI {
  private genres;

  constructor() {
    this.genres = GenreFactory.getData(typePersistance.MONGO)
  }
}

export default new GenresAPI