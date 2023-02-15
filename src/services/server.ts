import http from 'http'
import express from 'express'
import cors from 'cors'
import routes from '@routes/index'
import { checkRequest, error404Route, errorHandler } from '@utils/globalErrorHandler'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Security
app.use(checkRequest)

// Routes
app.use('/api/v1', routes)

// Handlers
app.use(errorHandler)
app.use(error404Route)

const myServer = new http.Server(app)

export default myServer