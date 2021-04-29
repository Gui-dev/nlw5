import { Router } from 'express'

import { MessagesController } from '@modules/messages/infra/http/controllers/MessagesController'

const messagesRoutes = Router()
const messagesController = new MessagesController()

messagesRoutes.post('/', messagesController.create)

export default messagesRoutes
