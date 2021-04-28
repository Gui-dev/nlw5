import { Router } from 'express'

import settingsRoutes from '@modules/settings/infra/http/routes/settings.routes'
import usersRoutes from '@modules/users/infra/http/routes/users.routes'

const routes = Router()

routes.use('/settings', settingsRoutes)
routes.use('/users', usersRoutes)

export default routes
