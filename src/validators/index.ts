import { AuthValidator } from '@/validators/auth'
// import { EditionValidator } from '@/validators/edition'
// import { QuestionValidator } from '@/validators/question'
import { SubjectValidator } from '@/validators/subject'

export class Validators {
  static auth = AuthValidator
  // static edition = EditionValidator
  // static question = QuestionValidator
  static subject = SubjectValidator
}
