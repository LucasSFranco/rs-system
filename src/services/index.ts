import { AuthService } from '@/services/auth'
// import { EditionService } from '@/services/edition'
import { QuestionService } from '@/services/question'
import { SubjectService } from '@/services/subject'

export class Services {
  static auth = AuthService
  // static edition = EditionService
  static question = QuestionService
  static subject = SubjectService
}
