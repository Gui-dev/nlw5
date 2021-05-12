import { getRepository, Repository } from 'typeorm'

import { IConnectionRepositoryDTO } from '@modules/connections/dtos/IConnectionRepositoryDTO'
import { IConnectionRepository } from '@modules/connections/repositories/IConnectionRepository'
import { Connection } from '../entities/Connection'

export class ConnectionRepository implements IConnectionRepository {
  private connectionRepository: Repository<Connection>

  constructor () {
    this.connectionRepository = getRepository(Connection)
  }

  public async create ({ id, admin_id, user_id, socket_id }: IConnectionRepositoryDTO): Promise<Connection> {
    const connection = this.connectionRepository.create({
      id,
      admin_id,
      user_id,
      socket_id
    })
    await this.connectionRepository.save(connection)

    return connection
  }

  public async findByUserId (user_id: string): Promise<Connection> {
    const connection = await this.connectionRepository.findOne({ user_id })

    return connection
  }

  public async findAllWithoutAdmin (): Promise<Connection[]> {
    const connections = await this.connectionRepository.find({
      where: { admin_id: null },
      relations: ['user']
    })

    return connections
  }

  public async findBySocketId (socket_id: string): Promise<Connection> {
    const connection = this.connectionRepository.findOne({ socket_id })

    return connection
  }

  public async updateAdminId (user_id: string, admin_id: string): Promise<void> {
    await this.connectionRepository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where('user_id = :user_id', { user_id })
      .execute()
  }
}
