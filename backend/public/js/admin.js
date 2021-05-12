/* eslint-disable no-undef */
const socket = io()
let connectionsUsers = []

socket.on('admin_list_all_users', connections => {
  // eslint-disable-next-line no-const-assign
  connectionsUsers = connections
  document.querySelector('#list_users').innerHTML = ''
  const template = document.querySelector('#template').innerHTML

  connections.forEach(connection => {
    const rendered = Mustache.render(template, {
      id: connection.socket_id,
      email: connection.user.email
    })

    document.querySelector('#list_users').innerHTML += rendered
  })
})

const call = (id) => {
  const connection = connectionsUsers.find(connection => connection.socket_id === id)
  const template = document.querySelector('#admin_template').innerHTML
  const rendered = Mustache.render(template, {
    id: connection.user_id,
    email: connection.user.email
  })

  document.querySelector('#supports').innerHTML += rendered

  const params = {
    user_id: connection.user_id
  }

  socket.emit('admin_user_in_support', params)

  socket.emit('admin_list_messages_by_user', params, messages => {
    const divMessages = document.querySelector(`#allMessages${params.user_id}`)

    messages.forEach(message => {
      const createDiv = document.createElement('div')

      if (message.admin_id === null) {
        createDiv.className = 'admin_message_client'
        createDiv.innerHTML = `<span><strong>${connection.user.email}</strong></span>`
        createDiv.innerHTML += `<span>${message.text}</span>`
        createDiv.innerHTML += `
          <span class="admin_date">
            ${dayjs(message.created_at).format('DD/MM/YYYY HH:mm:ss')}
          </span>
        `
      } else {
        createDiv.className = 'admin_message_admin'
        createDiv.innerHTML = `<strong>Atendente</strong> <span>${message.text}</span>`
        createDiv.innerHTML += `
          <span class="admin_date" style="color: #333">
            ${dayjs(message.created_at).format('DD/MM/YYYY HH:mm:ss')}
          </span>
        `
      }

      divMessages.appendChild(createDiv)
    })
  })
}

const sendMessage = (id) => {
  const text = document.querySelector(`#send_message_${id}`)

  const params = {
    text: text.value,
    user_id: id
  }

  socket.emit('admin_send_message', params)

  const divMessages = document.querySelector(`#allMessages${id}`)
  const createDiv = document.createElement('div')

  createDiv.className = 'admin_message_admin'
  createDiv.innerHTML = `<strong>Atendente</strong> <span>${params.text}</span>`
  createDiv.innerHTML += `
    <span class="admin_date" style="color: #333">
      ${dayjs().format('DD/MM/YYYY HH:mm:ss')}
    </span>
  `

  divMessages.appendChild(createDiv)
  text.value = ''
}

socket.on('admin_receive_message', (data) => {
  const connection = connectionsUsers.find(connection => (connection.socket_id = data.socket_id))
  const divMessages = document.querySelector(`#allMessages${connection.user_id}`)
  const createDiv = document.createElement('div')

  createDiv.className = 'admin_message_client'
  createDiv.innerHTML = `<span><strong>${connection.user.email}</strong></span>`
  createDiv.innerHTML += `<span>${data.message.text}</span>`
  createDiv.innerHTML += `
    <span class="admin_date">
      ${dayjs(data.message.created_at).format('DD/MM/YYYY HH:mm:ss')}
    </span>
  `

  divMessages.appendChild(createDiv)
})
