import AbstractPersistenceFactory from "@core/Persistence/persistenceFactory.interface";
import { GenreI } from "@models/genres/genres.interfaces";

export class GenreAPI {
  private genres;

  constructor(factory: AbstractPersistenceFactory) {
    this.genres = factory.createGenre()
  }

  async get(id?: string | undefined) {
    return await this.genres.get(id)
  }

  async add(genre: GenreI) {
    return await this.genres.add(genre)
  }

  async update(id: string, genre: GenreI) {
    return await this.genres.update(id, genre)
  }

  async delete(id: string) {
    return await this.genres.delete(id)
  }
}