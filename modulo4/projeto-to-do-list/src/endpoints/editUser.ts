import {Request, Response} from 'express'
import updateUser from '../data/updateUser'

export default async function editUser(req:Request, res:Response) {
    try {
        //validar entradas
        if(req.body.name === '' || req.body.nickanme=== '' || req.body.email === ''){
            res.status(400).send({
                mesage: "Nenhum dos compos podem esatr em branco"
            })
            return
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({
                message: "Escolha ao menos um valor para alterar"
            })
            return 
        }
        //Consultar o banco de dados
        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        // validar saídas do banco
        // responder a requisição

        res.status(200).send({
            message: "usuário atualizado"
         } )


    } catch (error:any) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}