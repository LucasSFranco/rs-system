import { type CreateAlternativeData } from '@/types/auth'

export const checkCorrectAlternatives = (alternatives: CreateAlternativeData[]) => {
  const correctAlternatives = alternatives
    .filter(alternative => alternative.isCorrect)

  return correctAlternatives.length === 1
}
