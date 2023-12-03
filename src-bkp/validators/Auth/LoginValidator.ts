import { z } from 'zod'
import { isCredentials } from '@/validators/custom/isCredentials'

export const LoginValidator = z.object({
  email: z.string(),
  password: z.string()
})
  .refine(isCredentials, { message: 'Invalid credentials' })
