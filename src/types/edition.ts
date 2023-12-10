export interface CreateTestConfigData {
  subjectId: string
  questionsAmount: number
  duration: number
}

export interface CreateEditionData {
  name: string
  testConfigs: CreateTestConfigData[]
}
