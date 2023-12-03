import bcrypt from 'bcryptjs'
import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/infra/database'
import { User } from '@/infra/models/User'

export class AuthController {
  static async login (req: Request, res: Response) {
    const { email, password } = req.body

    const user = await User.getByEmail(email)

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials' })
    }

    const passwordMatch = await User
      .comparePassword(password, user.passwordHash)

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)

    return res
      .status(200)
      .json({ token })
  }

  static async register (req: Request, res: Response) {
    const { email, password } = req.body

    const passwordHash = bcrypt.hashSync(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: passwordHash
      }
    })

    return res
      .status(201)
      .json(user)
  }
}
