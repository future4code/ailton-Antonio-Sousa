import {Request, Response} from 'express';
import { connection } from '../data/connection';
import { insertUsers } from '../data/insertUsers';

export async function Createuser(req:Request, res: Response): Promise<any>{
    try {
        
        const {id, name, email, password} = req.body

        if(!id || !name || !email){
            res.statusCode = 400
            throw new Error("Preencha todos os campos")
        }

        const result = await insertUsers(id, name, email, password)
   

        res.status(201).send(`O usuario ${name} foi criado`)

    } catch (error:any) {
            res.status(res.statusCode || 500).send({message:error.message})
    }
}