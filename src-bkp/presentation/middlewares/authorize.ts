import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { prisma } from '@/infra/database'

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: 'No token provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.sub as string
      }
    })

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Invalid token' })
    }

    req.userId = user.id

    next()
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Invalid token' })
  }
}
