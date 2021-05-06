import { Request, Response } from 'express'

import { SettingsRepository } from '@modules/settings/infra/typeorm/repositories/SettingsRepository'

export class SettingsController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { username, chat } = request.body
    const settingsRepository = new SettingsRepository()
    const settings = await settingsRepository.create({ username, chat })

    return response.status(201).json(settings)
  }

  public async show (request: Request, response: Response): Promise<Response> {
    const { username } = request.params
    const settingsRepository = new SettingsRepository()
    const settings = await settingsRepository.findByUsername(username)

    return response.status(201).json(settings)
  }

  public async update (request: Request, response: Response): Promise<Response> {
    const { username } = request.params
    const { chat } = request.body
    const settingsRepository = new SettingsRepository()

    const settings = await settingsRepository.update(username, chat)

    return response.status(201).json(settings)
  }
}
