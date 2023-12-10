import { z } from 'zod'
import { checkSubjectUniqueness } from '@/validators/Custom/checkSubjectUniqueness'

export class CreateSubjectValidator {
  schema = z.object({
    name: z.string()
      .trim()
      .min(1, { message: 'Name is required' })
      .max(80, { message: 'Must contain at most 80 characters' })
      .refine(checkSubjectUniqueness, { message: 'Subject already exists' })
  })

  async validate (rawData: unknown) {
    return await this.schema.parseAsync(rawData)
  }
}

export const createSubjectValidator = new CreateSubjectValidator()
