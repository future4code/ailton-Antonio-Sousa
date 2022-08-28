import {Request, Response} from 'express'
import { connection } from '..'
import insertUser from '../data/insertUser'

export default async function createUser(req:Request, res:Response) {
    try {
        //validar entradas
        if(!req.body.name || !req.body.nickname || !req.body.email){
            res.status(400).send("Preencha todos os campos")
        } 
        //Consultar o banco de dados

        const id:string = Date.now() + Math.random().toString() // pegando id pelo date.noe que vai uma hora qualquer e depois somar com um numero aleatorio
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        // validar saídas do banco
          // responder a requisição
            res.status(200).send("Usuário criado")
      


    } catch (error:any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}