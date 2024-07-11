import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import connectToDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config()

const app = express()
connectToDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({ success: false, statusCode, message })
})

app.listen(3000, () => {
    console.log(`server is listening on port ${3000}`)
})
