import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import cors from 'cors'
import { join } from 'path'
import 'express-async-errors'

import { AppError } from '@shared/error/AppError'

import '@shared/infra/typeorm'
import routes from './routes'

const server = express()
const http = createServer(server)
const io = new Server(http)

server.use(express.static(join(__dirname, '..', '..', '..', '..', 'public')))
server.set('views', join(__dirname, '..', '..', '..', '..', 'public'))
server.engine('html', require('ejs').renderFile)
server.set('view engine', 'html')
server.use(express.json())
server.use(cors())

io.on('connection', (socket: Socket) => {
  console.log('Conectou: ', socket.id)
})

server.use(routes)

server.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    console.log(err)
    return response.status(err.statusCode).json({ message: err.message })
  }

  return response.status(500).json({
    message: 'Internal server error'
  })
})

export {
  http,
  io
}
