export const checkCorrectAlternatives = (alternatives: { statement: string, isCorrect: boolean }[]) => {
  const correctAlternatives = alternatives
    .filter(alternative => alternative.isCorrect)

  return correctAlternatives.length === 1
}
