import { getRepository, Repository } from 'typeorm'

import { Setting } from '@modules/settings/infra/typeorm/entities/Setting'
import { ISettingsRepository } from '@modules/settings/repositories/ISettingsRepository'
import { ISettingsReposytoryDTO } from '@modules/settings/dtos/ISettingsReposytoryDTO'
import { AppError } from '@shared/error/AppError'

export class SettingsRepository implements ISettingsRepository {
  private settingsRepository: Repository<Setting>

  constructor () {
    this.settingsRepository = getRepository(Setting)
  }

  public async create ({ username, chat }: ISettingsReposytoryDTO): Promise<Setting> {
    const userAlreadyExists = await this.settingsRepository.findOne({ username })

    if (userAlreadyExists) {
      throw new AppError('User already exists')
    }

    const settings = this.settingsRepository.create({ username, chat })
    await this.settingsRepository.save(settings)

    return settings
  }

  public async findByUsername (username: string): Promise<Setting> {
    const settings = await this.settingsRepository.findOne({ username })

    if (!settings) {
      throw new AppError('User does not exist')
    }

    return settings
  }

  public async update (username: string, chat: boolean): Promise<void> {
    await this.settingsRepository.createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', { username })
      .execute()
  }
}
