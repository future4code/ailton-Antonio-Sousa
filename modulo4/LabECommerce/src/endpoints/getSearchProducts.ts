import {Request, Response} from 'express'
import { selectSearchName } from '../data/selectSearchName'

export async function getSearchProducts(req:Request, res:Response):Promise<void>{
    try {
        const byName = req.query.search as string
       
        if(!byName){
            throw new Error("Produto não encontrado")
        }

        const result =  await selectSearchName(byName)

        res.status(200).send(result)
          

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message:error.message})
    }
}