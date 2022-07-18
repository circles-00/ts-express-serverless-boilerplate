import * as express from 'express'

const app = express()

import * as bodyParser from 'body-parser'
import { Context } from './context'
import { Request } from 'express'
import authRouter from './routes/auth.router'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const { PORT } = process.env

// context
app.use((req: Request, res, next) => {
  req.context = new Context()
  next()
})

// Logs
app.use((req, res, next) => {
  req.context.data.appUrl = req.protocol + '://' + req.get('host')

  console.log('Requested path ' + req.path + ' METHOD: ' + req.method)
  next()
})

// Routers
app.use('/', authRouter)

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
