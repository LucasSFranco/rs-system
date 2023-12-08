import { authRouter } from '@/routes/AuthRouter'
// import { editionRouter } from '@/routes/EditionRouter'
import { questionRouter } from '@/routes/QuestionRouter'
import { subjectRouter } from '@/routes/SubjectRouter'

export class Router {
  static auth = authRouter.routes()
  // static edition = editionRouter.routes()
  static question = questionRouter.routes()
  static subject = subjectRouter.routes()
}
