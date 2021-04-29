import { getRepository } from 'typeorm'

import { IMessagesRepository } from '@modules/messages/repositories/IMessagesRepository'
import { Message } from '../entities/Message'
import { IMessagesRepositoryDTO } from '@modules/messages/dtos/IMessagesRepositoryDTO'

export class MessagesRepository implements IMessagesRepository {
  public async create ({ admin_id, user_id, text }: IMessagesRepositoryDTO): Promise<Message> {
    const messagesRepository = getRepository(Message)
    const message = messagesRepository.create({
      admin_id,
      user_id,
      text
    })

    await messagesRepository.save(message)

    return message
  }
}
