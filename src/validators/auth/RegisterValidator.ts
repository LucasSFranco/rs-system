import { z } from 'zod'

export interface PasswordMatchData {
  password: string
  passwordConfirmation: string
}

const checkPasswordMatch = (data: PasswordMatchData) => {
  const { password, passwordConfirmation } = data

  return password === passwordConfirmation
}

const checkPasswordStrength = (password: string) => {
  const UPPER_CASE_LETTERS = /[A-Z]/
  const LOWER_CASE_LETTERS = /[a-z]/
  const NUMBERS = /[0-9]/
  const SPECIAL_CHARACTERS = /[!@#$%^&*()-_=+{}[\]|;:",<.>]/

  const groups = [UPPER_CASE_LETTERS, LOWER_CASE_LETTERS, NUMBERS, SPECIAL_CHARACTERS]

  const strength = groups
    .reduce((acc, group) => group.test(password) ? acc + 1 : acc, 0)

  return strength >= 3
}

export class RegisterValidator {
  schema = z.object({
    name: z.string()
      .trim()
      .min(1, { message: 'Required' })
      .max(80, { message: 'Must be at most 80 characters long' }),
    email: z.string()
      .email()
      .max(255, { message: 'Must be at most 255 characters long' }),
    password: z.string()
      .min(8, { message: 'Must be at least 8 characters long' })
      .max(32, { message: 'Must be at most 32 characters long' })
  })

  async validate (rawData: unknown) {
    return this.schema.parse(rawData)
  }
}

export const registerValidator = new RegisterValidator()
