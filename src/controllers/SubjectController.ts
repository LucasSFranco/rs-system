import { Repositories } from '@/repositories'
import { Services } from '@/services'
import { type NextFunction, type Request, type Response } from 'express'

export class SubjectController {
  async getAll (req: Request, res: Response, next: NextFunction) {
    try {
      const questions = await Repositories.subject
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

      const createdSubject = await Services.subject
        .create
        .execute(rawData)

      return res
        .status(201)
        .json(createdSubject)
    } catch (error) {
      next(error)
    }
  }
}

export const subjectController = new SubjectController()
