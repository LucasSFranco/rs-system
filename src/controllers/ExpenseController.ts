import { type CreateExpenseService } from '@/services/CreateExpenseService'
import { type Request, type Response } from 'express'

export class ExpenseController {
  constructor (
    private readonly createExpenseService: CreateExpenseService
  ) {}

  async createExpense (req: Request, res: Response) {
    const createdExpense = await this.createExpenseService.execute(req.body)

    return res
      .status(201)
      .json(createdExpense)
  }
}
