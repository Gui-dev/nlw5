import { Router } from 'express'

import settingsRoutes from '@modules/settings/infra/http/routes/settings.routes'

const routes = Router()

routes.use('/settings', settingsRoutes)

export default routes
