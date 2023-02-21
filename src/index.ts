// TypeScript

import express, { type Application } from 'express'
import { routes } from './routes'

const app: Application = express()
const port: number = 80

routes(app)

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`)
})
