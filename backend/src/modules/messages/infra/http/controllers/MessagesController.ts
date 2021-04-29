import { Request, Response } from 'express'
import { MessagesRepository } from '../../typeorm/repositories/MessagesRepository'

export class MessagesController {
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
