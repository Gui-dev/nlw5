import { Router } from 'express'

import { SettingsController } from '@modules/settings/infra/http/controllers/SettingsController'

const settingsRoutes = Router()
const settingsController = new SettingsController()

settingsRoutes.get('/:username', settingsController.show)
settingsRoutes.post('/', settingsController.create)
settingsRoutes.put('/:username', settingsController.update)

export default settingsRoutes
