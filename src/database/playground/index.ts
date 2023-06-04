import { prisma } from '@/database'

const main = async () => {
  const data = await prisma.expense.findMany({
    include: {
      category: true
    }
  })

  console.log(JSON.stringify(data))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
  })
