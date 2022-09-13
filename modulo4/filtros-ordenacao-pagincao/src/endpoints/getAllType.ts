import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllType(req:Request, res:Response): Promise<any>{
    try {
        let byType =  req.params.type

        if(!byType){
            byType = ""
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        const result  = await connection("aula48_exercicio").where("type", "LIKE", `${byType}`)

        const getType = result.map((item)=>{
            return {
                id: item.id,
                name: item.name,
                email: item.email,
                type: item.type
            }
        })

        res.status(200).send(getType)
    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}