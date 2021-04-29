import { getRepository, Repository } from 'typeorm'

import { User } from '../entities/User'
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User>

  constructor () {
    this.usersRepository = getRepository(User)
  }

  public async create (email: string): Promise<User> {
    const userExists = await this.usersRepository.findOne({ email })

    if (userExists) {
      return userExists
    }

    const user = this.usersRepository.create({ email })
    await this.usersRepository.save(user)

    return user
  }
}
