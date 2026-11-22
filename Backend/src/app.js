import express from 'express'
import cors from 'cors'
import {config} from './config/config'

const app = express()

app.use(cors({
    origin: config.frontend_url,
    credentials: true
}))
app.use(express.json())

export default app;