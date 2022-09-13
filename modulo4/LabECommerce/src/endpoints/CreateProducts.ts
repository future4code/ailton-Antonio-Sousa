import {Request, Response} from 'express'
import { insertProducts } from '../data/insertProducts'
import { Products } from '../Types/products'

export async function CreateProducts(req:Request, res:Response): Promise<any>{
    try {
        
        const {id, name, price, image_url}:Products = req.body

        if(!id || !name || !price || !image_url){
            res.statusCode = 400
            throw new Error("Preencha todos os campos corretamente")
        }

        const result = await insertProducts(id, name, price, image_url)

        res.status(201).send(`O produto ${name} foi cadastrado`)
    } catch (error:any) {
        res.status(res.statusCode || 500).send({message:error.message})
    }
}