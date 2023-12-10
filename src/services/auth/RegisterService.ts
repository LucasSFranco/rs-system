import { Repositories } from '@/repositories'
import { Validators } from '@/validators'

export class RegisterService {
  async execute (rawData: unknown) {
    const data = await Validators.auth.register.validate(rawData)

    const createdUser = await Repositories.user.create(data)

    return createdUser
  }
}

export const registerService = new RegisterService()
