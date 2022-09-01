import { Request, Response } from "express";
import { insertCepAll } from "../data/insertCepAll";
import { requisicaoAllCep } from "../services/requisicaoAllcep";
import { CepAll } from "../Types/usuarios";


export async function postCreateAll(req:Request, res: Response){
    try {
        const cep = req.params.cep

        if(!cep){
            res.statusCode = 404
            throw new Error("Cep não encotrado")
        }

        const responseCep = await requisicaoAllCep(cep)

        if(!responseCep){
            res.statusCode = 404
            throw new Error(`Não existe cep com o número ${cep}`)
        }

        const cadastroUserCep:CepAll = {
            cep:responseCep.cep,
            logradouro:responseCep.logradouro,
            numero:responseCep.siafi,
            complemento:responseCep.complemento,
            bairro:responseCep.bairro,
            cidade:responseCep.localidade,
            estado:responseCep.uf
        }

        await insertCepAll(cadastroUserCep)

        res.send("Cadastro foi um sucesso!!!")

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})
    } 
    
}