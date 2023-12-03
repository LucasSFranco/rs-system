import Router, { type Express } from 'express'
import { Controllers } from '@/controllers'

export class AuthRouter {
  private readonly router: Express

  constructor () {
    this.router = Router()
  }

  routes () {
    this.router.post('/register', Controllers.auth.register)

    return this.router
  }
}

export const authRouter = new AuthRouter()
