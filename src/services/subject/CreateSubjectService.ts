import { Repositories } from '@/repositories'
import { Validators } from '@/validators'

export class CreateSubjectService {
  async execute (rawData: unknown) {
    const data = await Validators.subject.create.validate(rawData)

    const subject = await Repositories.subject
      .create(data)

    return subject
  }
}

export const createSubjectService = new CreateSubjectService()
