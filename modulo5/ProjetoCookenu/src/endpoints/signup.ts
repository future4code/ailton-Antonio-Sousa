import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { User } from "../model/User";
import { Autheticator } from "../services/Autheticator";
import { GenereteId } from "../services/GenereteId";
import { HassManager } from "../services/HashManager";

export async function signup(req:Request, res:Response):Promise<void>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            res.statusCode = 404
            throw new Error("Erro ao enviar os dados")
        }
        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)
       
        if(user){
            res.status(409).send("Esse Email já está cadastrado")
        }
        const generateId = new GenereteId()
        const id  = generateId.generate()
        const hashManager = await new HassManager().passHash(password)
    
        const newUser = new User(id, name, email, hashManager)

       await userDatabase.createUser(newUser)

        const authenticator = new Autheticator().authetic(id)

        res.status(201).send({message: "Usuário criado com sucesso", authenticator})

    } catch (error:any) {
        res.status(error.statusCode || 500).send({message: error.message})
    }
}