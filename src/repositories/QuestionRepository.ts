import { prisma } from '@/database'
import { type CreateQuestionData } from '@/types/auth'

export class QuestionRepository {
  async findAll () {
    return await prisma.question.findMany()
  }

  async countBySubjectId (subjectId: string) {
    return await prisma.question.count({
      where: { subjectId }
    })
  }

  async create (data: CreateQuestionData) {
    return await prisma.question.create({
      data: {
        statement: data.statement,
        subject: {
          connect: {
            id: data.subjectId
          }
        },
        alternatives: {
          create: data.alternatives
        }
      },
      select: {
        id: true,
        statement: true,
        subject: {
          select: {
            id: true,
            name: true
          }
        },
        alternatives: {
          select: {
            id: true,
            statement: true,
            isCorrect: true
          }
        }
      }
    })
  }
}

export const questionRepository = new QuestionRepository()
