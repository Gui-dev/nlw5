import { Router } from 'express'

import settingsRoutes from '@modules/settings/infra/http/routes/settings.routes'
import usersRoutes from '@modules/users/infra/http/routes/users.routes'
import messagesRoutes from '@modules/messages/infra/http/routes/messages.routes'

const routes = Router()

routes.get('/pages/client', (req, res) => {
  return res.render('html/client.html')
})
routes.get('/pages/admin', (req, res) => {
  return res.render('html/admin.html')
})
routes.use('/settings', settingsRoutes)
routes.use('/users', usersRoutes)
routes.use('/messages', messagesRoutes)

export default routes
