import 'dotenv/config'
import express from 'express'
import { router } from '@/routes'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.json())

app.use(router)

io.on('connection', (socket) => {
  console.log('a user connected')
})

export { server }
