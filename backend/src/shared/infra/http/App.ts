import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import { createServer, Server as Http } from 'http'
import { Server, Socket } from 'socket.io'
import cors from 'cors'
import { join } from 'path'
import 'express-async-errors'

import { AppError } from '@shared/error/AppError'

import '@shared/infra/typeorm'
import routes from './routes'

export class App {
  public server: express.Application
  public http: Http
  public io: Server

  constructor () {
    this.server = express()
    this.http = createServer(this.server)
    this.io = new Server(this.http)

    this.middlewares()
    this.routes()
    this.socketIO()
    this.handleException()
  }

  public middlewares () {
    this.server.use(express.json())
    this.server.use(express.static(join(__dirname, '..', '..', '..', '..', 'public')))
    this.server.set('views', join(__dirname, '..', '..', '..', '..', 'public'))
    this.server.engine('html', require('ejs').renderFile)
    this.server.set('view engine', 'html')
    this.server.use(cors())
  }

  public routes () {
    this.server.use(routes)
  }

  public socketIO () {
    this.io.on('connection', (socket: Socket) => {
      console.log('Conecotu: ', socket.id)
    })
  }

  public handleException () {
    this.server.use((err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        console.log(err)
        return response.status(err.statusCode).json({ message: err.message })
      }

      return response.status(500).json({
        message: 'Internal server error'
      })
    })
  }
}
