import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/database'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middlewares/error-middleware'

import routes from './routes'

dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*'
}))

app.use('/api', routes.productsRouter)
app.use('/api/user', routes.userRouter)
app.use(errorMiddleware)

app.listen(process.env.PORT!, () => console.log(`Server started on port ${process.env.PORT}`))