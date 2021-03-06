import { ISettingsReposytoryDTO } from '@modules/settings/dtos/ISettingsReposytoryDTO'
import { Setting } from '@modules/settings/infra/typeorm/entities/Setting'

export interface ISettingsRepository {
  create ({ username, chat }: ISettingsReposytoryDTO): Promise<Setting>
  findByUsername (username: string): Promise<Setting>
  update (username: string, chat: boolean): Promise<void>
}
