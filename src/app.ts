import 'dotenv/config'
import express from 'express'
import { Router } from '@/routes'
import { Middlewares } from '@/middlewares'

const app = express()

app.use(express.json())

app.use('/auth', Router.auth)

app.use(Middlewares.errorHandler)

export { app }
