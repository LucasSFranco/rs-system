import { authController } from '@/controllers/AuthController'
import { editionController } from '@/controllers/EditionController'
import { questionController } from '@/controllers/QuestionController'
import { subjectController } from '@/controllers/SubjectController'

export class Controllers {
  static auth = authController
  static edition = editionController
  static question = questionController
  static subject = subjectController
}
