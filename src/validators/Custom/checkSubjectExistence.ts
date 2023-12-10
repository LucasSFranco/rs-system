import { Repositories } from '@/repositories'

export const checkSubjectExistence = async (id: string) => {
  const subject = await Repositories.subject.findById(id)

  return !!subject
}
