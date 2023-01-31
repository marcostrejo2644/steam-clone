import AbstractPersistenceFactory from "@core/Persistence/persistenceFactory.interface"
import { TagI } from "@models/tags/tags.interfaces"

export class TagAPI {
  private tags

  constructor(factory: AbstractPersistenceFactory) {
    this.tags = factory.createTag()
  }

  async get(id?: string | undefined) {
    return await this.tags.get(id)
  }

  async add(tag: TagI) {
    return await this.tags.add(tag)
  }

  async update(id: string, tag: TagI) {
    return await this.tags.update(id, tag)
  }

  async delete(id: string) {
    return await this.tags.delete(id)
  }
}