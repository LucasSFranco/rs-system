import request from 'supertest'
import { app } from '@/index'
import { prisma } from '@/infra/database'
import { seed } from '@/database/seed'
import { expenses } from '#/fixtures/expenses'

describe.skip('Create Expense', () => {
  beforeAll(async () => {
    await seed()
  })

  it('returns new expense on success', async () => {
    const data = expenses['example']

    const response = await request(app)
      .post('/expenses')
      .send(data)

    expect(response.status).toEqual(201)
    expect(response.body).toEqual(
      expect.objectContaining({
        ...data,
        id: expect.any(String)
      })
    )
  })

  it('persists expense data on success', async () => {
    const data = expenses['example']

    const response = await request(app)
      .post('/expenses')
      .send(data)

    const createdExpense = await prisma.expense
      .findUnique({
        where: { id: response.body.id }
      })

    expect(createdExpense).toMatchObject(data)
  })

  it('returns validation error when "date" is empty', async () => {
    const response = await request(app)
      .post('/expenses')

    expect(response.status).toEqual(400)
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          code: 'required',
          path: ['date'],
          message: expect.any(String)
        }
      ])
    )
  })

  test('returns validation error when "categoryId" is empty', async () => {
    const response = await request(app)
      .post('/expenses')

    expect(response.status).toEqual(400)
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          code: 'required',
          path: ['categoryId'],
          message: expect.any(String)
        }
      ])
    )
  })
})
