import { CRUD } from "@core/CRUD.interface"
import { GameI } from "@models/games/games.interfaces"
import { GenreI } from "@models/genres/genres.interfaces"
import { TagI } from "@models/tags/tags.interfaces"

export default interface AbstractPersistenceFactory {
  createGame() : CRUD<GameI>
  createTag() : CRUD<TagI>
  createGenre() : CRUD<GenreI>
}