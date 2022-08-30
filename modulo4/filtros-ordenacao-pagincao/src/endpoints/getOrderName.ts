import {Request, Response} from 'express';
import { connection } from '../data/connection';

export async function getOrderName(req:Request, res:Response):Promise<any>{
   
    let type = req.params.type
    let ordenacao = req.query.order
   
    if(!type){
        type =  ""
    }
    if(!ordenacao){
        ordenacao =  "asc"
    }

    const result = await connection("aula48_exercicio")
    .where("type", "LIKE", `${type}`).orderBy("name", `${ordenacao}`)

    const getOrder = result.map((item)=> {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        type: item.type
      }
    })
    res.send(getOrder)

}