// import { prisma } from '@/database'
// import { checkCategoryExistence } from '@/validators/custom/isQuestionCategoryExistent'

// export interface CreateExpenseData {
//   date: Date
//   categoryId: string
//   amount: number
//   description?: string
// }

// export class CreateExpenseService {
//   async execute (data: CreateExpenseData, userId: string) {
//     await checkCategoryExistence(data.categoryId, userId)

//     const expense = await prisma.expense.create({ data })

//     return expense
//   }
// }
