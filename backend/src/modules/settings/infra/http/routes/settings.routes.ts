import { Router } from 'express'

import { SettingsController } from '@modules/settings/infra/http/controllers/SettingsController'

const settingsRoutes = Router()
const settingsController = new SettingsController()

settingsRoutes.post('/', settingsController.create)

export default settingsRoutes
