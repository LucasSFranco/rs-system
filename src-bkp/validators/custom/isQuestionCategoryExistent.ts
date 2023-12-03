import { prisma } from '@/infra/database'

export const isQuestionCategoryExistent = async (id: string) => {
  const questionCategory = await prisma.questionCategory
    .findUnique({
      where: { id }
    })

  return questionCategory !== null
}
