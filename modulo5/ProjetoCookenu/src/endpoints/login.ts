import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";
import { User } from "../model/User";
import { Autheticator } from "../services/Autheticator";
import { HassManager } from "../services/HashManager";

export async function login(req:Request, res:Response): Promise<void>{
    try {
        const {email, password} = req.body

        if(!email || !password){
            res.statusCode = 404
            throw new Error('Insira corretamente as informções')
        }

        const useDatabase = new UserDatabase()
        const user = await useDatabase.findUserByEmail(email)

        if(!user){
            res.status(409).send("Esse Email não está cadastrado")
        }
        const hash = await new HassManager()
        const verifyPassword = hash.compare(password, user.getPassWord())


        if(!verifyPassword){
            res.status(201).send('Email ou senha incorretos')
        }

        const authenticator = new Autheticator().authetic(user.getId())

        res.status(200).send({message: "Usuário Logado com sucesso", authenticator })
    } catch (error:any) {
        res.status(error.statusCode || 500).send({message: error.message})
    }
}