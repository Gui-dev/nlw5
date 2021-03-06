import { IMessagesRepositoryDTO } from '../dtos/IMessagesRepositoryDTO'
import { Message } from '../infra/typeorm/entities/Message'

export interface IMessagesRepository {
  create (data: IMessagesRepositoryDTO): Promise<Message>
  listByUser(user_id: string): Promise<Message[]>
}
