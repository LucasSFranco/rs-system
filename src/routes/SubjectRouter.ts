import Router, { type Express } from 'express'
import { Controllers } from '@/controllers'

export class SubjectRouter {
  private readonly router: Express

  constructor () {
    this.router = Router()
  }

  routes () {
    this.router.get('/', Controllers.subject.getAll)
    this.router.post('/', Controllers.subject.create)

    return this.router
  }
}

export const subjectRouter = new SubjectRouter()
