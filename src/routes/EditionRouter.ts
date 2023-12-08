import Router, { type Express } from 'express'
import { Controllers } from '@/controllers'

export class EditionRouter {
  private readonly router: Express

  constructor () {
    this.router = Router()
  }

  routes () {
    // this.router.get('/', Controllers.edition.getAll)
    this.router.post('/', Controllers.edition.create)

    return this.router
  }
}

export const editionRouter = new EditionRouter()
