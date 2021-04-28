import { User } from '../infra/typeorm/entities/User'

export interface IUsersRepository {
  create (email: string): Promise<User>
}
