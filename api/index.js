import dotenv from 'dotenv';
import express from 'express';
import connectToDB from './config/db.js';
dotenv.config()

const app = express()
connectToDB()

app.listen(3000, () => {
    console.log(`server is listening on port ${3000}`)
})
