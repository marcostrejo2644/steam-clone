import { CRUD } from "@models/Core/CRUD.interface";
import { TagDTO } from "@models/tags/tags.interfaces";
import mongoConnection from "@services/mongoDB";
import { Logger } from "@utils/logger";
import tagSchema from "./tagsSchema";
import tagsJSON from "../../../../test/JSON/tags.json"

export class TagsMongoPersistance implements CRUD<TagDTO> {
  private Tag;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Tag = mongoServer.model<TagDTO>("Tags", tagSchema)
  }

  async get(id?: string | undefined): Promise<TagDTO | TagDTO[] | null> {
    if(id) return await this.Tag.findById(id)

    return await this.Tag.find()
  }

  async add(object: TagDTO): Promise<TagDTO | null> {
    const newTag = new this.Tag(object)
    return await newTag.save()
  }

  async update(id: string, object: TagDTO): Promise<TagDTO | null> {
    return await this.Tag.findByIdAndUpdate(id , object)
  }
  
  async delete(id: string): Promise<null> {
    return await this.Tag.findByIdAndUpdate(id)
  }

  // call inside constructor
  // private bulk() {
  //   this.Tag.count()
  //     .then( (count: number) => {
  //         if(!count) {
  //           this.Tag.insertMany(tagsJSON)
  //         }
  //     })
  //     .catch(error => Logger.error(error.message))
  // }
}