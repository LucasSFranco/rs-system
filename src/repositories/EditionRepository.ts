import { prisma } from "@/database"

export class EditionRepository {
  async findById (id: string) {
    return await prisma.edition.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        testConfigs: {
          select: {
            id: true,
            questionsAmount: true,
            subject: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    })
  }

  async create (data: { name: string, testConfigs: { subjectId: string, questionsAmount: number, duration: number }[] }) {
    return await prisma.edition.create({
      data: {
        name: data.name,
        testConfigs: {
          create: data.testConfigs
        }
      },
      select: {
        id: true,
        name: true,
        testConfigs: {
          select: {
            id: true,
            questionsAmount: true,
            duration: true,
            subject: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      }
    })
  }
}

export const editionRepository = new EditionRepository()
