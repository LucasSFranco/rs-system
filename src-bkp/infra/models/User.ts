import bcrypt from 'bcryptjs'
import { prisma } from '@/infra/database'

interface CreateUserData {
  name: string
  email: string
  password: string
}

export class User {
  static async getByEmail (email: string) {
    return await prisma.user.findUnique({
      where: { email }
    })
  }

  static async create (data: CreateUserData) {
    const passwordHash = bcrypt.hashSync(data.password, 10)

    return await prisma.user
      .create({ data: { ...data, passwordHash } })
  }

  static async changeEmail (id: string, email: string) {
    return await prisma.user
      .update({ where: { id }, data: { email } })
  }

  static async changePassword (id: string, password: string) {
    const passwordHash = bcrypt.hashSync(password, 10)

    return await prisma.user
      .update({ where: { id }, data: { passwordHash } })
  }

  static async comparePassword (password: string, passwordHash: string) {
    return await bcrypt.compare(password, passwordHash)
  }

  static async delete (id: string) {
    return await prisma.user
      .delete({ where: { id } })
  }
}
