import { prisma } from '@/infra/database'
import { z } from 'zod'

export const TestConfigurationValidator = z.object({
  category: z.string()
    .uuid({ message: 'Category is required' })
    .refine(async category => {
      const questionCategory = await prisma.questionCategory
        .findUnique({
          where: { id: category }
        })

      return questionCategory !== null
    }, {
      message: 'Category does not exist'
    }),
  questionAmount: z.number()
    .int()
    .min(10, { message: 'At least one question is required' })
    .max(100, { message: 'At most 100 questions are allowed' })
    .refine(async ({ questionAmount }) => {
      const questionCategory = await prisma.questionCategory
        .findUnique({
          where: { id: category }
        })

      const questions = await prisma.question
        .findMany({
          where: { category: questionCategory }
        })

      return questions.length >= questionAmount
    }, {
      message: 'Category does not have enough questions'
    }),
  duration: z.number()
    .int()
})
  .refine(async ({ questionAmount, duration }) => {
    const minDuration = questionAmount * 30

    return duration >= minDuration
  }, {
    message: 'Duration is too short: it must be at least 30 seconds per question'
  })
