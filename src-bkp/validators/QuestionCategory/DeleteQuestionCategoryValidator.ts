import { z } from 'zod'
import { Validators } from '@/validators'

export const DeleteQuestionCategoryValidator = z.object({
  id: Validators.questionCategory.update.shape.id
})
