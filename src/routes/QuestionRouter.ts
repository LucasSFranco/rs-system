import Router, { type Express } from 'express'
import { Controllers } from '@/controllers'

export class QuestionRouter {
  private readonly router: Express

  constructor () {
    this.router = Router()
  }

  routes () {
    this.router.get('/', Controllers.question.getAll)
    this.router.post('/', Controllers.question.create)

    return this.router
  }
}

export const questionRouter = new QuestionRouter()
