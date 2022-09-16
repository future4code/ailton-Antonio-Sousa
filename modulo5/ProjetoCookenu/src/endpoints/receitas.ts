import { Request, Response } from "express";
import { ReceitasBaseDatabase } from "../data/ReceitasBaseDataBase";
import { Receitas } from "../model/Receitas";
import { Autheticator } from "../services/Autheticator";
import { GenereteId } from "../services/GenereteId";

export async function receitas(req:Request, res:Response){
    try {
        const {title, descricao, preparo, data, user_id }  = req.body

        if(!title || !descricao || !preparo || !data){
            res.statusCode = 404
            throw new Error("Preecha todos os campos")
        }

        const receitasBaseDataBase = new ReceitasBaseDatabase()

        const genereteId =  new GenereteId()
        const id  = genereteId.generate()

        const novaReceita = new Receitas(id, title, descricao, preparo, data, user_id)

        await receitasBaseDataBase.createReceita(novaReceita)

        const authenticator = new Autheticator().authetic(id)

        res.status(201).send({message:"Receita criada", authenticator})
        
    } catch (error:any) {
        res.status(error.statusCode || 500).send({message: error.message})
    }
}