import { Repositories } from '@/repositories'
import { Validators } from '@/validators'

export class CreateEditionService {
  async execute (rawData: unknown) {
    const data = await Validators.edition.create.validate(rawData)

    const edition = await Repositories.edition
      .create(data)

    return edition
  }
}

export const createEditionService = new CreateEditionService()
