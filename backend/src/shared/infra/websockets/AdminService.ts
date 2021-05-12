import { Socket } from 'socket.io'

import { io } from '@shared/infra/http/Http'
import { ConnectionRepository } from '@modules/connections/infra/typeorm/repositories/ConnectionRepository'
import { MessagesRepository } from '@modules/messages/infra/typeorm/repositories/MessagesRepository'

io.on('connect', async (socket: Socket) => {
  const connectionRepository = new ConnectionRepository()
  const messagesRepository = new MessagesRepository()

  const allConnectionsWithoutAdmin = await connectionRepository.findAllWithoutAdmin()

  io.emit('admin_list_all_users', allConnectionsWithoutAdmin)

  socket.on('admin_list_messages_by_user', async (params, callback) => {
    const { user_id } = params
    const allMessages = await messagesRepository.listByUser(user_id)

    callback(allMessages)
  })

  socket.on('admin_send_message', async (params) => {
    const { user_id, text } = params
    await messagesRepository.create({
      user_id,
      admin_id: socket.id,
      text
    })

    const { socket_id } = await connectionRepository.findByUserId(user_id)

    io.to(socket_id).emit('admin_send_to_client', {
      text,
      socket_id: socket.id
    })
  })

  socket.on('admin_user_in_support', async (params) => {
    const { user_id } = params
    await connectionRepository.updateAdminId(user_id, socket.id)
    const allConnectionsWithoutAdmin = await connectionRepository.findAllWithoutAdmin()
    io.emit('admin_list_all_users', allConnectionsWithoutAdmin)
  })
})
