document.querySelector('#start_chat').addEventListener('click', (event) => {
  // eslint-disable-next-line no-undef
  const socket = io('http://localhost:3333')

  const chatHelp = document.getElementById('chat_help')
  chatHelp.style.display = 'none'

  const chatInSupport = document.getElementById('chat_in_support')
  chatInSupport.style.display = 'block'

  const email = document.getElementById('email').value
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
        // eslint-disable-next-line no-undef
        const rendered = Mustache.render(template_admin, {
          message_admin: message.text
        })

        messagesDOM.innerHTML += rendered
      }
    })
  })
})
