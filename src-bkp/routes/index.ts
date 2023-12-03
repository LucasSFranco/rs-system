import Router, { type Request, type Response } from 'express'
import { Controllers } from '@/presentation/controllers'
import { prisma } from '@/infra/database'
import bcrypt from 'bcryptjs'

const router = Router()

router.post('/auth/login', Controllers.auth.login)
router.post('/auth/register', async (req: Request, res: Response) => {
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
})

export { router }
