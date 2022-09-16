import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDataBase";

import { Autheticator } from "../services/Autheticator";


export async function followUser(req:Request, res:Response){
    try {
        const token = req.headers.authorization
        const {idSeguindo}= req.body
        if(!token || !idSeguindo){
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        const id = new Autheticator().getVerifyToken(token) // verificando se o token é valido

        const userData = new UserDatabase()

        const followPerson = await userData.insertFollow(id, idSeguindo)

        res.status(200).send({message: followPerson})
    } catch (error:any) {
        res.status(error.statusCode || 500).send({message: error.message})
    }
}