import { type NextFunction, type Request, type Response } from 'express'
import { ZodError } from 'zod'

export class ErrorHandlerMiddleware {
  async execute (error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error)
    }

    return res
      .status(500)
      .json({ message: 'Internal server error' })
  }
}

export const errorHandlerMiddleware = new ErrorHandlerMiddleware()
