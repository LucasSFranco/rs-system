import { z } from 'zod'
import { isQuestionCategoryExistent } from './custom/isQuestionCategoryExistent'

export const CreateQuestionValidator = z.object({
  statement: z.string()
    .min(1, { message: 'Statement is required' })
    .max(1000)
    .trim(),
  type: z.enum(['SINGLE_CHOICE', 'MULTIPLE_CHOICE']),
  category: z.string()
    .uuid({ message: 'Category is required' })
    .refine(isQuestionCategoryExistent, {
      message: 'Category does not exist'
    }),
  difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
  alternatives: z.array(
    z.object({
      statement: z.string()
        .min(1, { message: 'Statement is required' })
        .max(100)
        .trim(),
      isCorrect: z.boolean()
    })
  )
    .min(4, { message: 'At least four alternatives are required' })
    .max(10, { message: 'At most ten alternatives are allowed' })
})
  .refine(({ alternatives, type }) => {
    const correctAlternatives = alternatives
      .filter(alternative => alternative.isCorrect)

    if (type === 'SINGLE_CHOICE') return correctAlternatives.length === 1
  }, {
    message: 'One alternative must be correct'
  })
  .refine(({ alternatives, type }) => {
    const correctAlternatives = alternatives
      .filter(alternative => alternative.isCorrect)

    if (type === 'MULTIPLE_CHOICE') return correctAlternatives.length >= 1
  }, {
    message: 'At least two alternatives must be correct'
  })
