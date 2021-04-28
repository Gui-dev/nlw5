import { Request, Response } from 'express'
import { UsersRepository } from '../../typeorm/repositories/UsersRepository'

export class UsersController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { email } = request.body
    const usersRepository = new UsersRepository()
    const user = await usersRepository.create(email)

    return response.status(201).json(user)
  }
}
