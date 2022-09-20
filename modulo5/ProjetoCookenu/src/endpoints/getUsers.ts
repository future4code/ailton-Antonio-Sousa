import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { Autheticator } from "../services/Autheticator";


export async function getUsers(req:Request, res:Response){
    try {
        const token = req.headers.authorization as string
  
        if(!token){
            res.status(422).send("Precisa de autorização nos headers")
        }
    
        const authenticator = new Autheticator().authetic(token)
    
        if(!authenticator){
            res.status(201).send('Token não encontrado')
        }
    
        const userDatabase = new UserDatabase()
        const users = await userDatabase.getAllusers()
        
        res.status(200).send(users)

    } catch (error:any) {
        res.status(400).send(error.message)
    }

}