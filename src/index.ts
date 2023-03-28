// TypeScript

import express, { type Application } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'
// connect DB
import './utils/connectDB'

import deserializeToken from './middleware/deserializedToken'

const app: Application = express()
const port: number = 8080

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors access handler
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.use(deserializeToken)

routes(app)

app.listen(port, () => {
  logger.info(`Server is Listening on port ${port}`)
})
