import { getRepository, Repository } from 'typeorm'

import { IMessagesRepository } from '@modules/messages/repositories/IMessagesRepository'
import { Message } from '../entities/Message'
import { IMessagesRepositoryDTO } from '@modules/messages/dtos/IMessagesRepositoryDTO'

export class MessagesRepository implements IMessagesRepository {
  private messagesRepository: Repository<Message>

  constructor () {
    this.messagesRepository = getRepository(Message)
  }

  public async create ({ admin_id, user_id, text }: IMessagesRepositoryDTO): Promise<Message> {
    const message = this.messagesRepository.create({
      admin_id,
      user_id,
      text
    })

    await this.messagesRepository.save(message)

    return message
  }

  public async listByUser (user_id: string): Promise<Message[]> {
    const list = await this.messagesRepository.find({
      where: { user_id },
      relations: ['user']
    })

    return list
  }
}
