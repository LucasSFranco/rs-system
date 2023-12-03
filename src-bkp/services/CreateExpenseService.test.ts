import { prisma } from '@/infra/database'
import { seed } from '@/database/seed'
import { CreateExpenseService, type CreateExpenseData } from '@/services/CreateExpenseService'
import { expenses } from '#/fixtures/expenses'

describe('CreateExpenseService', () => {
  const createExpenseService = new CreateExpenseService()

  beforeAll(async () => {
    await seed()
  })

  describe('execute', () => {
    it('returns a new expense', async () => {
      const data: CreateExpenseData = expenses['example']

      const expense = await createExpenseService.execute(data)

      expect(expense).toMatchObject({
        ...data,
        id: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date)
      })
    })

    it('persists the expense data in the database', async () => {
      const data: CreateExpenseData = expenses['example']

      const expense = await createExpenseService.execute(data)

      const persistedExpense = await prisma.expense.findUnique({
        where: { id: expense.id }
      })

      expect(persistedExpense).toMatchObject(expense)
    })

    it.only('throws an error if the category does not exist within the user', async () => {
      const data: CreateExpenseData = expenses['example']

      expect.hasAssertions()

      try {
        await createExpenseService.execute(data)
      } catch (error) {
        expect(error).toEqual(
          expect.objectContaining({
            code: 'category_not_found',
            path: ['categoryId'],
            message: expect.any(String)
          })
        )
      }
    })
  })
})
