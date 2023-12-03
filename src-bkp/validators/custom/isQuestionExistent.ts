import { prisma } from '@/infra/database'

export const isQuestionExistent = async (id: string) => {
  const question = await prisma.question
    .findUnique({
      where: { id }
    })

  return question !== null
}
