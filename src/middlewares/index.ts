import { errorHandlerMiddleware } from '@/middlewares/ErrorHandlerMiddleware'

export class Middlewares {
  static errorHandler = errorHandlerMiddleware.execute
}
