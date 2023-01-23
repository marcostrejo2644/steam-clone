import gamesAPI from "@apis/gamesAPI";
import { NextFunction, Request, Response } from "express";

class gamesController {
  constructor(){}

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const games = await gamesAPI.get(id)
        
      res.json({ data: games });
    } catch (error) {
      next(error)
    }
  }

  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { 
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews 
      } = req.body

      const newGame = await gamesAPI.add({
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews 
      })

      return res.json({ data: newGame })
    } catch (error) {
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { 
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews 
      } = req.body
      const { id } = req.params
      
      const updatedGame = await gamesAPI.update(id, { 
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews 
      })

      return res.json({ data: updatedGame })
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const deletedGame = await gamesAPI.delete(id)

      return res.json({ data: deletedGame })
    } catch (error) {
      next(error)
    }
  }

}

export default new gamesController()
