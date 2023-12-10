export interface CreateAlternativeData {
  statement: string
  isCorrect: boolean
}

export interface CreateQuestionData {
  subjectId: string
  statement: string
  alternatives: CreateAlternativeData[]
}
