import { Request, Response } from "express";
import ProdutosBussines from "../bussines/ProdutosBussines";
import { ProdutosDTO } from "../model/Produtos";
const fs = require('fs')

export default class ProdutosContoller {

    async create(req: Request, res: Response) {
        try {
        
            const { id, name, tags } = req.body

            const produtosBussines = new ProdutosBussines()

            const produtos: ProdutosDTO = {
                id, name, tags
            }

            const result = await produtosBussines.create(produtos)

            res.status(201).send({ messae: result })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getJson(req: Request, res: Response){
        const content = fs.readFileSync('../produtos.json', 'utf-8')
        res.send(JSON.parse(content))
    }
}