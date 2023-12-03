import { CreateQuestionCategoryValidator } from '@/validators/QuestionCategory/CreateQuestionCategoryValidator'
import { UpdateQuestionCategoryValidator } from '@/validators/QuestionCategory/UpdateQuestionCategoryValidator'
import { DeleteQuestionCategoryValidator } from '@/validators/QuestionCategory/DeleteQuestionCategoryValidator'

export class QuestionCategoryValidator {
  static create = CreateQuestionCategoryValidator
  static update = UpdateQuestionCategoryValidator
  static delete = DeleteQuestionCategoryValidator
}
