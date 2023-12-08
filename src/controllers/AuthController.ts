import jwt from 'jsonwebtoken'
import { Services } from '@/services'
import { type NextFunction, type Request, type Response } from 'express'
import * as env from '@/configs/env'
import { Repositories } from '@/repositories'

export class AuthController {
  async login (req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body

    const user = await Repositories.user
      .findByEmail(email)

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials' })
    }

    const passwordMatch = await Repositories.user
      .comparePassword(password, user.passwordHash)

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET)

    return res
      .status(200)
      .json({ token })
  }

  async register (req: Request, res: Response, next: NextFunction) {
    const rawData = req.body

    const createdUser = await Services.auth
      .register
      .execute(rawData)

    return res
      .status(200)
      .json(createdUser)
  }
}

export const authController = new AuthController()
