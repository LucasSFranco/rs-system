import { type Request, type Response } from 'express'
import { prisma } from '@/infra/database'
import { Validators } from '@/validators'

export class CreateQuestionCategoryService {
  async execute (rawData: unknown) {
    const data = Validators.questionCategory.create
      .parse(rawData)

    const questionCategory = await prisma.questionCategory
      .create(data)

    return questionCategory
  }
}

export class QuestionCategoryController {
  static async create (req: Request, res: Response) {
    const data = req.body

    const questionCategory = await new CreateQuestionCategoryService()
      .execute(data)

    return res
      .status(200)
      .json(questionCategory)
  }
}
