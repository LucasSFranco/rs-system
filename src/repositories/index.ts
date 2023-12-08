// import { editionRepository } from '@/repositories/EditionRepository'
// import { questionRepository } from '@/repositories/QuestionRepository'
import { subjectRepository } from '@/repositories/SubjectRepository'
import { userRepository } from '@/repositories/UserRepository'

export class Repositories {
  // static edition = editionRepository
  // static question = questionRepository
  static subject = subjectRepository
  static user = userRepository
}
