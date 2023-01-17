import { typePersistance } from "@models/Core/persistan.type"
import TagFactory from "@models/tags/tags.factory"
import { TagDTO } from "@models/tags/tags.interfaces"

class TagsAPI {
  private tags

  constructor() {
    this.tags = TagFactory.getData(typePersistance.MONGO)
  }

  async get(id?: string | undefined) {
    return await this.tags.get(id)
  }

  async add(tag: TagDTO) {
    return await this.tags.add(tag)
  }

  async update(id: string, tag: TagDTO) {
    return await this.tags.update(id, tag)
  }

  async delete(id: string) {
    return await this.tags.delete(id)
  }
}

export default new TagsAPI()