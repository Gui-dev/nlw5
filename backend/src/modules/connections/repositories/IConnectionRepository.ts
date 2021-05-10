import { IConnectionRepositoryDTO } from '../dtos/IConnectionRepositoryDTO'
import { Connection } from '../infra/typeorm/entities/Connection'

export interface IConnectionRepository {
  create (data: IConnectionRepositoryDTO): Promise<Connection>
  findByUserId (user_id: string): Promise<Connection>
  findAllWithoutAdmin (): Promise<Connection[]>
}
