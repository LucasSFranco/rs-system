import { Repositories } from '@/repositories'
import { Validators } from '@/validators'

export class LoginService {
  async execute (rawData: unknown) {
    const data = await Validators.auth.login.validate(rawData)

    return data.email
  }
}

export const loginService = new LoginService()
