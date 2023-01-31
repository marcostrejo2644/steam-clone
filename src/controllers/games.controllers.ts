import { GameAPI } from "@apis/gameAPI";
import { MongoFactory } from "@core/Persistence/mongoFactory";
import AbstractPersistenceFactory from "@core/Persistence/persistenceFactory.interface";
import { NextFunction, Request, Response } from "express";

export class GameController {
  private factory: AbstractPersistenceFactory
  private gameAPI: GameAPI

  constructor(){
    this.factory = new MongoFactory()
    this.gameAPI = new GameAPI(this.factory)
  }

  get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const games = await this.gameAPI.get(id)
        
      res.json({ data: games });
    } catch (error) {
      next(error)
    }
  }

  add = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { 
        name,
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews,
        genre,
        tags,
        features,
        price
      } = req.body

      const newGame = await this.gameAPI.add({
        name,
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews,
        genre,
        tags,
        features,
        price
      })

      return res.json({ data: newGame })
    } catch (error) {
      next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { 
        name,
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews,
        genre,
        tags,
        features,
        price
      } = req.body
      const { id } = req.params
      
      const updatedGame = await this.gameAPI.update(id, { 
        name,
        about,
        releaseDate,
        principalPicture,
        images,
        shortDescription,
        owner,
        requeriments,
        sells,
        reviews,
        genre,
        tags,
        features,
        price
      })

      return res.json({ data: updatedGame })
    } catch (error) {
      next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params
      const deletedGame = await this.gameAPI.delete(id)

      return res.json({ data: deletedGame })
    } catch (error) {
      next(error)
    }
  }
}