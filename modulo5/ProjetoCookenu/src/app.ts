import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

export const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=> {
    console.log("Rodando em http://localhost:3003")
})
