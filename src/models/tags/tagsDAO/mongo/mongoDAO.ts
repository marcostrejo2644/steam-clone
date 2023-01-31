import { CRUD } from "@core/CRUD.interface";
import { TagI } from "@models/tags/tags.interfaces";
import mongoConnection from "@services/mongoDB";
import tagSchema from "./tagsSchema";

export class TagMongoPersistence implements CRUD<TagI> {
  private Tag;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Tag = mongoServer.model<TagI>("Tags", tagSchema)
  }

  async get(id?: string | undefined): Promise<TagI | TagI[] | null> {
    if(id) return await this.Tag.findById(id)
    return await this.Tag.find()
  }

  async add(object: TagI): Promise<TagI | null> {
    const newTag = new this.Tag(object)
    return await newTag.save()
  }

  async update(id: string, object: TagI): Promise<TagI | null> {
    return await this.Tag.findByIdAndUpdate(id , object)
  }
  
  async delete(id: string): Promise<null> {
    return await this.Tag.findByIdAndUpdate(id)
  }
}