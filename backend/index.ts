import { App } from '@shared/infra/http/App'

const app = new App().server
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
