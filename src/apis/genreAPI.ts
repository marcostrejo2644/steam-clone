import { typePersistance } from "@models/Core/persistan.type";
import GenreFactory from "@models/genres/genres.factory";
import { GenreDTO } from "@models/genres/genres.interfaces";

class GenresAPI {
  private genres;

  constructor() {
    this.genres = GenreFactory.getData(typePersistance.MONGO)
  }

  async get(id?: string | undefined) {
    return await this.genres.get(id)
  }

  async add(genre: GenreDTO) {
    return await this.genres.add(genre)
  }

  async update(id: string, genre: GenreDTO) {
    return await this.genres.update(id, genre)
  }

  async delete(id: string) {
    return await this.genres.delete(id)
  }
}

export default new GenresAPI()