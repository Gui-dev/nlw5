import { getRepository } from 'typeorm'

import { User } from '../entities/User'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  public async create (email: string): Promise<User> {
    const usersRepository = getRepository(User)

    const userExists = await usersRepository.findOne({ email })

    if (userExists) {
      return userExists
    }

    const user = usersRepository.create({ email })
    await usersRepository.save(user)

    return user
  }
}
