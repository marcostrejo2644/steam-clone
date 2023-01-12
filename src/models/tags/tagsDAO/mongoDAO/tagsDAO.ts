import { CRUD } from "@models/Core/CRUD.interface";
import { TagI } from "@models/tags/tags.interfaces";
import mongoConnection from "@services/mongoDB";
import tagSchema from "./tagsSchema";


export class TagsMongoPersistance implements CRUD<TagI> {
  private Tag;

  constructor() {
    const mongoServer = mongoConnection.getConnection()
    this.Tag = mongoServer.model<TagI>("Tag", tagSchema)
  }

  get(id?: string | undefined): Promise<TagI | TagI[] | null> {
    throw new Error("Method not implemented.");
  }
  add(object: TagI): Promise<TagI | null> {
    throw new Error("Method not implemented.");
  }
  update(object: TagI, id: string): Promise<TagI> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}