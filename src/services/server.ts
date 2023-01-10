import http from 'http'
import express, { ErrorRequestHandler } from 'express'
import cors from 'cors'
import { Logger } from '@utils/logger'
import routes from '@routes/index'

const app = express()

//Error Handler
const errorHandler: ErrorRequestHandler = (err, req, res) => {
  Logger.error(`HUBO UN ERROR ${err}`)
  // res.status(500).json({
  //   err: err.message
  // });
}

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.use(errorHandler)
const myServer = new http.Server(app)

export default myServer
