export const isStrongPassword = (password: string) => {
  const UPPER_CASE_LETTERS = /[A-Z]/
  const LOWER_CASE_LETTERS = /[a-z]/
  const NUMBERS = /[0-9]/
  const SPECIAL_CHARACTERS = /[!@#$%^&*()-_=+{}[\]|;:",<.>]/

  const groups = [UPPER_CASE_LETTERS, LOWER_CASE_LETTERS, NUMBERS, SPECIAL_CHARACTERS]

  const strength = groups
    .reduce((acc, group) => group.test(password) ? acc + 1 : acc, 0)

  return strength >= 3
}
