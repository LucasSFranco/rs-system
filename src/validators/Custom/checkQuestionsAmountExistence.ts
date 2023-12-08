import { Repositories } from "@/repositories"

export const checkQuestionsAmountExistence = async ({ subjectId, questionsAmount }: { subjectId: string, questionsAmount: number }) => {
  const questionCount = await Repositories.question.countBySubjectId(subjectId)

  return questionCount >= questionsAmount
}
