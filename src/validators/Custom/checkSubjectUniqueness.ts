import { Repositories } from '@/repositories'

export const checkSubjectUniqueness = async (name: string) => {
  const subject = await Repositories.subject.findByName(name)

  return !subject
}
