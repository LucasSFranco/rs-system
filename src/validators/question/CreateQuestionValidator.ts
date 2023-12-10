import { checkCorrectAlternatives } from '@/validators/Custom/checkCorrectAlternatives'
import { checkSubjectExistence } from '@/validators/Custom/checkSubjectExistence'
import { z } from 'zod'

// TODO: Check statement uniqueness (alternative and question)
export class CreateQuestionValidator {
  schema = z.object({
    subjectId: z.string()
      .uuid()
      .refine(checkSubjectExistence, { message: 'Subject does not exist' }),
    statement: z.string()
      .min(1, { message: 'Statement is required' })
      .max(1000, { message: 'Must contain at most 1000 characters' })
      .trim(),
    alternatives: z.array(
      z.object({
        statement: z.string()
          .trim()
          .min(1, { message: 'Statement is required' })
          .max(100, { message: 'Must contain at most 100 characters' }),
        isCorrect: z.boolean()
      })
    )
      .length(5, { message: 'Five alternatives are required' })
      .refine(checkCorrectAlternatives, { message: 'One alternative must be correct' })
  })

  async validate (rawData: unknown) {
    return await this.schema.parseAsync(rawData)
  }
}

export const createQuestionValidator = new CreateQuestionValidator()
