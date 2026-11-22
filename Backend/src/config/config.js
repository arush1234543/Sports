import dotenv from 'dotenv'
dotenv.config()

export const config = {
    port: process.env.PORT,
    frontend_url: process.env.FRONTEND_URL,
    mongo_url: process.env.MONGO_URL,
}