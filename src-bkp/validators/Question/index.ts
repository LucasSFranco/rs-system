import { CreateQuestionValidator } from '@/validators/Question/CreateQuestionValidator'
import { UpdateQuestionValidator } from '@/validators/Question/UpdateQuestionValidator'
import { DeleteQuestionValidator } from '@/validators/Question/DeleteQuestionValidator'

export class QuestionValidator {
  static create = CreateQuestionValidator
  static update = UpdateQuestionValidator
  static delete = DeleteQuestionValidator
}
