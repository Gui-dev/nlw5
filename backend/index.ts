import { http } from '@shared/infra/http/Http'

import '@shared/infra/websockets/ClientService'
import '@shared/infra/websockets/AdminService'

const port = process.env.PORT || 3333

http.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
