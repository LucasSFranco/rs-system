import { Repositories } from '@/repositories'
import { Validators } from '@/validators'

export class CreateQuestionService {
  async execute (rawData: unknown) {
    const data = await Validators.question.create.validate(rawData)

    const question = await Repositories.question
      .create(data)

    return question
  }
}

export const createQuestionService = new CreateQuestionService()
