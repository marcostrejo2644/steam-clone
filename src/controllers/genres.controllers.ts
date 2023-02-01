import { NextFunction, Request, Response } from "express";
import { GenreAPI } from "@apis/genreAPI";
import AbstractPersistenceFactory from "@core/Persistence/persistenceFactory.interface";
import { MongoFactory } from "@core/Persistence/mongoFactory";

export class GenreController {
  private factory: AbstractPersistenceFactory
  private genreAPI: GenreAPI

  constructor() {
    this.factory = new MongoFactory()
    this.genreAPI = new GenreAPI(this.factory)
  }

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const genres = await this.genreAPI.get(id)
        
      res.json({ data: genres });
    } catch (error) {
      next(error)
    }
  }

  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body
      const newGenre = await this.genreAPI.add({ name })

      return res.json({ data: newGenre })
    } catch (error) {
      next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body
      const { id } = req.params
      
      const updatedGenre = await this.genreAPI.update(id, { name })

      return res.json({ data: updatedGenre })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const deletedGenre = await this.genreAPI.delete(id)

      return res.json({ data: deletedGenre })
    } catch (error) {
      next(error)
    }
  }
}