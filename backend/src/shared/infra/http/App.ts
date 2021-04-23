import express from 'express'
import cors from 'cors'

import routes from './routes'

export class App {
  public server: express.Application

  constructor () {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  public middlewares () {
    this.server.use(cors())
  }

  public routes () {
    this.server.use(routes)
  }
}
