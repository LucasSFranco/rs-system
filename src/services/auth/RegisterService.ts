import { Validators } from '@/validators'

export interface RegisterData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export class RegisterService {
  async execute (rawData: unknown) {
    const data = await Validators.auth
      .register
      .validate(rawData)

    return data
  }
}

export const registerService = new RegisterService()
