import { type Request, type Response } from 'express'
import { Repositories } from '@/repositories'
import { Services } from '@/services'

export class QuestionController {
  async getAll (req: Request, res: Response) {
    const questions = await Repositories.question
      .findAll()

    return res
      .status(200)
      .json(questions)
  }

  async create (req: Request, res: Response) {
    const rawData = req.body

    const createdQuestion = await Services.question
      .create
      .execute(rawData)

    return res
      .status(201)
      .json(createdQuestion)
  }
}

export const questionController = new QuestionController()
