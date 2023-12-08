import { type Request, type Response } from 'express'
import { Services } from '@/services'

export class EditionController {
  async create (req: Request, res: Response) {
    const rawData = req.body

    const createdEdition = await Services.edition
      .create
      .execute(rawData)

    return res
      .status(201)
      .json(createdEdition)
  }
}

export const editionController = new EditionController()
