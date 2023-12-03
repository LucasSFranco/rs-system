import { Services } from '@/services'
import { type NextFunction, type Request, type Response } from 'express'

export class AuthController {
  async register (req: Request, res: Response, next: NextFunction) {
    try {
      const rawData = {
        email: req.body.email,
        password: req.body.password
      }

      const createdUser = await Services.auth
        .register
        .execute(rawData)

      return res
        .status(200)
        .json(createdUser)
    } catch (error) {
      next(error)
    }
  }
}

export const authController = new AuthController()
