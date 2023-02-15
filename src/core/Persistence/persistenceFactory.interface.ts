import { CRUD } from "@core/CRUD.interface"
import { GameI } from "@models/games/games.interfaces"
import { GenreI } from "@models/genres/genres.interfaces"
import { TagI } from "@models/tags/tags.interfaces"
import { UserCreateRequest } from "@models/users/users.interfaces"

export default interface AbstractPersistenceFactory {
  createGame() : CRUD<GameI, string>
  createTag() : CRUD<TagI, string>
  createGenre() : CRUD<GenreI, string>
  createUser() : CRUD<UserCreateRequest, string>
}