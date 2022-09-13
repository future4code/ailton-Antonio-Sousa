import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { requisicaoCep } from "../services/requisicaoCep";
import {Usuario} from '../Types/usuarios'

export async function postCreateCep(req:Request, res: Response): Promise<any> {
   try {
    const cep = req.params.cep

    if(!cep){
        res.statusCode = 404
        throw new Error(`O cep => ${cep} não foi encontrado`)
    }

    const resultCep = await requisicaoCep(cep)

    if(!resultCep){
        res.statusCode = 404
        throw new Error(`Não existe cep com o número ${cep}`)
    }
 
    const usuarioCep:Usuario= {
        logradouro:resultCep.logradouro,
        bairro:resultCep.bairro,
        cidade:resultCep.localidade,
        estado:resultCep.uf
    }

    await insertUser(usuarioCep)

    res.status(201).send("Pessoa cadastrada")


} catch (error:any) {
    res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})
   }


}