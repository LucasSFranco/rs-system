import { compare } from 'bcryptjs'
import { prisma } from '@/infra/database'
import { type Credentials } from '@/types/Auth'

export const isCredentials = async (data: Credentials) => {
  const user = await prisma.user
    .findUnique({ where: { email: data.email } })

  if (!user) {
    return false
  }

  const passwordMatch = await compare(data.password, user.password)

  if (!passwordMatch) {
    return false
  }

  return true
}
