import { authRouter } from '@/routes/AuthRouter'

export class Router {
  static auth = authRouter.routes()
}
