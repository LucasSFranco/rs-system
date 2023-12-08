import 'dotenv/config'
import 'express-async-errors'
import express from 'express'
// import { Router } from '@/routes'
// import { Middlewares } from '@/middlewares'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.use('/auth', Router.auth)
// app.use('/editions', Router.edition)
// app.use('/questions', Router.question)
// app.use('/subjects', Router.subject)

// app.use(Middlewares.errorHandler)

export { app }
