import { typePersistance } from "@models/Core/persistan.type"
import TagFactory from "@models/tags/tags.factory"

class TagsAPI {
  private tags

  constructor() {
    this.tags = TagFactory.getData(typePersistance.MONGO)
  }
}

export default new TagsAPI()