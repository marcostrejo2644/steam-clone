import { NextFunction, Request, Response } from "express";
import {TagAPI} from "@apis/tagAPI";
import {MongoFactory} from "@core/Persistence/mongoFactory";
import AbstractPersistenceFactory from "@core/Persistence/persistenceFactory.interface";

export class TagController {
  private factory: AbstractPersistenceFactory;
  private tagAPI: TagAPI;

  constructor() {
    this.factory = new MongoFactory()
    this.tagAPI = new TagAPI(this.factory)
  }

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const tags = await this.tagAPI.get(id)
      
      return res.json({ data: tags });
    } catch (error) {
      next(error)
    }
  }

  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body
      const newTag = await this.tagAPI.add({ name })

      return res.json({ data: newTag })
    } catch (error) {
      next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body
      const { id } = req.params
      
      const updatedTag = await this.tagAPI.update(id, { name })

      return res.json({ data: updatedTag })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const deleteTag = await this.tagAPI.delete(id)

      return res.json({ data: deleteTag })
    } catch (error) {
      next(error)
    }
  }
  
}