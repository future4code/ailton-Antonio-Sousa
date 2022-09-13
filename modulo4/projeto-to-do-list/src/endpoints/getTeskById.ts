import {Request, Response} from "express"
import selectTeskById from "../data/selectTeskById"

export default async function getTeskById(req:Request, res:Response){
    try {
        
        const result  =  await selectTeskById(req.params.id)

        if(!result){
            res.status(404).send({message: "Tarefa não encontrada"})
            return
        }

        res.status(200).send(result)

    } catch (error:any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}