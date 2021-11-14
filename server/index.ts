import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/database'

import cors from 'cors'
import cookieParser from 'cookie-parser'

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

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))