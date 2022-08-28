import express from 'express';
import cors from 'cors';
import knex from "knex";
import dotenv from 'dotenv'
import createUser from './endpoints/createUsers';
import getUserById from './endpoints/getUserById';
import editUser from './endpoints/editUser';
import createTask from './endpoints/createTask';
import getTeskById from './endpoints/getTeskById';

dotenv.config()

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  }
});

const app = express()
app.use(express.json())
app.use(cors())


app.post("/user" ,createUser)
app.get("/user/:id",getUserById)
app.put("/user/edit/:id",editUser)
app.post("/task", createTask)
app.get("/task/:id", getTeskById)





app.listen(3003, ()=> {
    console.log(" Rodando em http://localhost:3003")
})