import { prisma } from '@/database'
import { type CreateSubjectData } from '@/types/subject'

export class SubjectRepository {
  async findAll () {
    return await prisma.subject.findMany()
  }

  async findById (id: string) {
    return await prisma.subject.findUnique({ where: { id } })
  }

  async findByName (name: string) {
    return await prisma.subject.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive'
        }
      }
    })
  }

  async create (data: CreateSubjectData) {
    return await prisma.subject.create({
      data,
      select: {
        id: true,
        name: true
      }
    })
  }
}

export const subjectRepository = new SubjectRepository()
