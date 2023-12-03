import { z } from 'zod'
import { isStrongPassword } from '@/validators/custom/isStrongPassword'

export const RegisterValidator = z.object({
  email: z.string()
    .email()
    .max(255, { message: 'Email must be at most 255 characters long' }),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(32, { message: 'Password must be at most 32 characters long' })
    .refine(isStrongPassword, { message: 'Password must match at least 3 of the following groups: uppercase letters, lowercase letters, numbers or special characters' }),
  passwordConfirmation: z.string()
})
  .refine((data) => data.password === data.passwordConfirmation, { message: 'Passwords must match' })
