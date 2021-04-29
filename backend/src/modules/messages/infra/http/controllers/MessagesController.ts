import { Request, Response } from 'express'
import { MessagesRepository } from '../../typeorm/repositories/MessagesRepository'

export class MessagesController {
  public async index (request: Request, response:Response): Promise<Response> {
    const { user_id } = request.params

    const messagesRepository = new MessagesRepository()
    const listMessages = await messagesRepository.listByUser(user_id)
    return response.status(201).json(listMessages)
  }

  public async create (request: Request, response:Response): Promise<Response> {
    const { admin_id, user_id, text } = request.body

    const messagesRepository = new MessagesRepository()
    const messages = await messagesRepository.create({
      admin_id,
      user_id,
      text
    })
    return response.status(201).json(messages)
  }
}
