import bcrypt from 'bcryptjs'
import { prisma } from '@/database'

export class UserRepository {
  async findByEmail (email: string) {
    return await prisma.user.findUnique({ where: { email } })
  }

  async create (data: { email: string, password: string }) {
    const email = data.email
    const passwordHash = bcrypt.hashSync(data.password, 10)

    return await prisma.user.create({
      data: { email, passwordHash }
    })
  }

  async comparePassword (password: string, passwordHash: string) {
    return bcrypt.compareSync(password, passwordHash)
  }
}

export const userRepository = new UserRepository()
