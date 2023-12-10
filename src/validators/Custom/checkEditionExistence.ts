import { Repositories } from '@/repositories'

export const checkEditionExistence = async (id: string) => {
  const edition = await Repositories.edition.findById(id)

  return !!edition
}
