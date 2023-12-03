import { z } from 'zod'
import { Validators } from '@/validators'
import { isQuestionExistent } from '@/validators/custom/isQuestionExistent'

export const UpdateQuestionValidator = Validators
  .question
  .create
  .extend({
    id: z.string()
      .uuid()
      .refine(
        isQuestionExistent,
        { message: 'Question does not exist' }
      )
  })
