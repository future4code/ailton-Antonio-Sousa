import {Request, Response} from 'express'
import selectUserById from '../data/selectuserById'

export default async function getUserById(req:Request, res:Response) {
    try {
        //validar entradas
    
        //Consultar o banco de dados
        const user = await selectUserById(req.params.id)

        if(!user){
            res.status(404).send({message: "usuário não encontrado"})
        }

        res.status(200).send({
            id: user.id,
            nickname:user.nickname
        })


    } catch (error:any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}