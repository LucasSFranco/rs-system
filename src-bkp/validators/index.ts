import { QuestionValidator } from '@/validators/Question'
import { QuestionCategoryValidator } from '@/validators/QuestionCategory'

export class Validators {
  static question = QuestionValidator
  static questionCategory = QuestionCategoryValidator
}
