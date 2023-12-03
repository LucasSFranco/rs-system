import { z } from 'zod'
import { Validators } from '@/validators'
import { isQuestionCategoryExistent } from '@/validators/custom/isQuestionCategoryExistent'

export const UpdateQuestionCategoryValidator = Validators
  .questionCategory
  .create
  .extend({
    id: z.string()
      .uuid()
      .refine(
        isQuestionCategoryExistent,
        { message: 'Question category does not exist' }
      )
  })
