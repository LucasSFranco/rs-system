import { Repositories } from '@/repositories'
import { Services } from '@/services'
import { type NextFunction, type Request, type Response } from 'express'

export class QuestionController {
  async getAll (req: Request, res: Response, next: NextFunction) {
    try {
      const questions = await Repositories.question
        .findAll()

      return res
        .status(200)
        .json(questions)
    } catch (error) {
      next(error)
    }
  }

  async create (req: Request, res: Response, next: NextFunction) {
    try {
      const rawData = req.body

      const createdQuestion = await Services.question
        .create
        .execute(rawData)

      return res
        .status(201)
        .json(createdQuestion)
    } catch (error) {
      next(error)
    }
  }
}

export const questionController = new QuestionController()
