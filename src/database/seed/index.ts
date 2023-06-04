import { prisma } from '@/database'

import users from '@/database/seed/users.json'
import expenseCategories from '@/database/seed/expenseCategories.json'
import expenses from '@/database/seed/expenses.json'

const seed = async () => {
  console.log('Deleting expenses...')
  await prisma.expense.deleteMany()
  console.log('Deleting expense categories...')
  await prisma.expenseCategory.deleteMany()
  console.log('Deleting users...')
  await prisma.user.deleteMany()

  console.log('Inserting users...')
  await Promise.all(users.map((data) => prisma.user.create({ data })))
  console.log('Inserting expense categories...')
  await Promise.all(expenseCategories.map((data) => prisma.expenseCategory.create({ data })))
  console.log('Inserting expenses...')
  await Promise.all(expenses.map((data) => prisma.expense.create({ data })))
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
  })
