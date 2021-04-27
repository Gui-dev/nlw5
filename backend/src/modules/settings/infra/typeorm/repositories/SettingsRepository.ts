import { getRepository } from 'typeorm'

import { Setting } from '@modules/settings/infra/typeorm/entities/Setting'
import { ISettingsRepository } from '@modules/settings/repositories/ISettingsRepository'
import { ISettingsReposytoryDTO } from '@modules/settings/dtos/ISettingsReposytoryDTO'
import { AppError } from '@shared/error/AppError'

export class SettingsRepository implements ISettingsRepository {
  public async create ({ username, chat }: ISettingsReposytoryDTO): Promise<Setting> {
    const settingsRepository = getRepository(Setting)

    const userAlreadyExists = await settingsRepository.findOne({ username })

    if (userAlreadyExists) {
      throw new AppError('User already exists')
    }

    const settings = settingsRepository.create({ username, chat })
    await settingsRepository.save(settings)

    return settings
  }
}
