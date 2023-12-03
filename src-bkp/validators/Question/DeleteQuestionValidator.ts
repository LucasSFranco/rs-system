import { z } from 'zod'
import { Validators } from '@/validators'

export const DeleteQuestionValidator = z.object({
  id: Validators.question.update.shape.id
})
