import { z } from 'zod'

export const CreateQuestionCategoryValidator = z.object({
  name: z.string()
    .min(1, { message: 'Name is required' })
    .max(80)
    .trim()
})
