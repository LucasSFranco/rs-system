import { checkSubjectExistence } from '@/validators/Custom/checkSubjectExistence'
import { checkQuestionsAmountExistence } from '@/validators/Custom/checkQuestionsAmountExistence'
import { z } from 'zod'

export const checkDurationMinimum = async ({ questionsAmount, duration }: { questionsAmount: number, duration: number }) => {
  const minDuration = questionsAmount * 30

  return duration >= minDuration
}

export const checkDurationMaximum = async ({ questionsAmount, duration }: { questionsAmount: number, duration: number }) => {
  const maxDuration = questionsAmount * 300

  return duration <= maxDuration
}

// TODO: Add check for uniqueness of test subject
// TODO: Add name uniqueness check
export class CreateEditionValidator {
  schema = z.object({
    name: z.string()
      .trim()
      .min(1, { message: 'Name is required' })
      .max(80, { message: 'Must contain at most 80 characters' }),
    testConfigs: z.array(
      z.object({
        subjectId: z.string()
          .uuid()
          .refine(checkSubjectExistence, { message: 'Subject does not exist' }),
        questionsAmount: z.number()
          .int()
          // .min(10, { message: 'Must be at least 10' })
          .max(100, { message: 'Must be at most 100' }),
        duration: z.number()
          .int()
      })
        .refine(checkQuestionsAmountExistence, { message: 'Category does not have enough questions' })
        .refine(checkDurationMinimum, { message: 'Must consider at least 30 seconds per question' })
        .refine(checkDurationMaximum, { message: 'Must consider at most 300 seconds per question' })
    )
  })

  async validate (rawData: unknown) {
    return this.schema.parseAsync(rawData)
  }
}

export const createEditionValidator = new CreateEditionValidator()
