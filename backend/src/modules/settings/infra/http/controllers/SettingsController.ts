import { Request, Response } from 'express'

import { SettingsRepository } from '@modules/settings/infra/typeorm/repositories/SettingsRepository'

export class SettingsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { username, chat } = request.body
    const settingsRepository = new SettingsRepository()
    const settings = await settingsRepository.create({ username, chat })

    return response.status(201).json(settings)
  }
}
