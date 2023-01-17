import tagsAPi from "@apis/tagsAPi";
import { NextFunction, Request, Response } from "express";

class TagController {

  constructor() {}

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const tags = await tagsAPi.get(id)
        
      res.json({ data: tags });
    } catch (error) {
      next(error)
    }
  }

  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      const newTag = await tagsAPi.add({ name })

      return res.json({ data: newTag })
    } catch (error) {
      next(error)
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { name } = req.body
      const { id } = req.params
      
      const updatedTag = await tagsAPi.update(id, { name })

      return res.json({ data: updatedTag })
    } catch (error) {
      next(error)
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const deleteTag = await tagsAPi.delete(id)

      return res.json({ data: deleteTag })
    } catch (error) {
      next(error)
    }
  }
  
}

export default new TagController()