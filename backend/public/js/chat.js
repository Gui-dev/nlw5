/* eslint-disable prefer-const */
/* eslint-disable no-undef */

let socket_admin_id = null
let emailUser = null
let socket = null

document.querySelector('#start_chat').addEventListener('click', (event) => {
  socket = io('http://localhost:3333')

  const chatHelp = document.getElementById('chat_help')
  chatHelp.style.display = 'none'

  const chatInSupport = document.getElementById('chat_in_support')
  chatInSupport.style.display = 'block'

  const email = document.getElementById('email').value
  emailUser = email
  const text = document.getElementById('txt_help').value

  socket.on('connect', () => {
    const params = { email, text }
    socket.emit('client_first_access', params, (callback, err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(callback)
      }
    })
  })

  socket.on('client_list_all_messages', messages => {
    const template_client = document.getElementById('message-user-template').innerHTML
    const template_admin = document.getElementById('admin-template').innerHTML
    const messagesDOM = document.getElementById('messages')

    messages.forEach((message) => {
      if (message.admin_id === null) {
        // eslint-disable-next-line no-undef
        const rendered = Mustache.render(template_client, {
          message: message.text,
          email
        })

        messagesDOM.innerHTML += rendered
      } else {
        const rendered = Mustache.render(template_admin, {
          message_admin: message.text
        })

        messagesDOM.innerHTML += rendered
      }
    })
  })

  socket.on('admin_send_to_client', message => {
    socket_admin_id = message.socket_id
    const templateAdmin = document.querySelector('#admin-template').innerHTML
    const rendered = Mustache.render(templateAdmin, {
      message_admin: message.text
    })

    document.querySelector('#messages').innerHTML += rendered
  })
})

document.querySelector('#send_message_button').addEventListener('click', event => {
  const text = document.querySelector('#message_user').value

  const params = {
    text,
    socket_admin_id
  }
  socket.emit('client_send_to_admin', params)

  const templateClient = document.querySelector('#message-user-template').innerHTML
  const rendered = Mustache.render(templateClient, {
    message: text,
    email: emailUser
  })

  document.querySelector('#messages').innerHTML += rendered
})
