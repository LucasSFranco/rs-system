import { Repositories } from '@/repositories'
import { type CreateTestConfigData } from '@/types/edition'

export const checkQuestionsAmountExistence = async (testConfig: CreateTestConfigData) => {
  const { subjectId, questionsAmount } = testConfig

  const questionCount = await Repositories.question.countBySubjectId(subjectId)

  return questionCount >= questionsAmount
}
