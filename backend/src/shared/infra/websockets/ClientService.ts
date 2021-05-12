import { Socket } from 'socket.io'

import { io } from '@shared/infra/http/Http'
import { ConnectionRepository } from '@modules/connections/infra/typeorm/repositories/ConnectionRepository'
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository'
import { MessagesRepository } from '@modules/messages/infra/typeorm/repositories/MessagesRepository'

interface IParams {
  text: string
  email: string
  socket_admin_id?: string
}

io.on('connect', (socket: Socket) => {
  const connectionRepository = new ConnectionRepository()
  const usersRepository = new UsersRepository()
  const messagesRepository = new MessagesRepository()

  socket.on('client_first_access', async (params: IParams) => {
    const socket_id = socket.id
    const { text, email } = params as IParams

    const userExists = await usersRepository.findByEmail(email)

    if (!userExists) {
      const user = await usersRepository.create(email)

      await connectionRepository.create({
        user_id: user.id,
        socket_id
      })
    }

    const connection = await connectionRepository.findByUserId(userExists.id)

    if (!connection) {
      await connectionRepository.create({
        user_id: userExists.id,
        socket_id
      })
    }

    connection.socket_id = socket_id
    await connectionRepository.create(connection)

    await messagesRepository.create({
      user_id: userExists.id,
      text
    })

    const allMessages = await messagesRepository.listByUser(userExists.id)

    socket.emit('client_list_all_messages', allMessages)
  })

  socket.on('client_send_to_admin', async (params: IParams) => {
    const { text, socket_admin_id } = params
    const { user_id } = await connectionRepository.findBySocketId(socket.id)
    const message = await messagesRepository.create({
      user_id,
      text
    })

    io.to(socket_admin_id).emit('admin_receive_message', {
      message,
      socket_id: socket.id
    })
  })
})
