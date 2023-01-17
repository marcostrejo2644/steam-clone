import { NextFunction, Request, Response } from "express";
import genreApi from "@apis/genreAPI";

class GenreController {

  constructor() {}

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const genres = await genreApi.get(id)
        
      res.json({ data: genres });
    } catch (error) {
      next(error)
    }
  }

  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      const newGenre = await genreApi.add({ name })

      return res.json({ data: newGenre })
    } catch (error) {
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      const { id } = req.params
      
      const updatedGenre = await genreApi.update(id, { name })

      return res.json({ data: updatedGenre })
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const deletedGenre = await genreApi.delete(id)

      return res.json({ data: deletedGenre })
    } catch (error) {
      next(error)
    }
  }
  
}

export default new GenreController()