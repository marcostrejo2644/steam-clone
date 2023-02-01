import { CRUD } from "@core/CRUD.interface";
import { TagI } from "@models/tags/tags.interfaces";
import mongoConnection from "@services/mongoDB";
import tagSchema from "./tagsSchema";

export class TagMongoPersistence implements CRUD<TagI, string> {
  private Tag;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Tag = mongoServer.model<TagI>("Tags", tagSchema)
  }

  async get(id?: string | undefined): Promise<TagI | TagI[] | null> {
    try {
      if(id) return await this.Tag.findById(id)
      return await this.Tag.find()
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }

  async add(entity: TagI): Promise<TagI | null> {
    try {
      const newTag = new this.Tag(entity)
      return await newTag.save()
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }

  async update(id: string, entity: TagI): Promise<TagI | null> {
    try {
      return await this.Tag.findByIdAndUpdate(id , entity)
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }
  
  async delete(id: string): Promise<TagI | null> {
    try {
      return await this.Tag.findByIdAndUpdate(id)
    } catch (error: any) {
      throw new Error(`Model Error -> ${error.message}`)
    }
  }
}