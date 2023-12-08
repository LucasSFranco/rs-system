import { Services } from '@/services'
import { type NextFunction, type Request, type Response } from 'express'

export class EditionController {
  async create (req: Request, res: Response, next: NextFunction) {
    try {
      const rawData = req.body

      const createdEdition = await Services.edition
        .create
        .execute(rawData)

      return res
        .status(201)
        .json(createdEdition)
    } catch (error) {
      next(error)
    }
  }
}

export const editionController = new EditionController()
