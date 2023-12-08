import { type Request, type Response } from 'express'
import { Repositories } from '@/repositories'
import { Services } from '@/services'

export class SubjectController {
  async getAll (req: Request, res: Response) {
    const questions = await Repositories.subject
      .findAll()

    return res
      .status(200)
      .json(questions)
  }

  async create (req: Request, res: Response) {
    const rawData = req.body

    const createdSubject = await Services.subject
      .create
      .execute(rawData)

    return res
      .status(201)
      .json(createdSubject)
  }
}

export const subjectController = new SubjectController()
