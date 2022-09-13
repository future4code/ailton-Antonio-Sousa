import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getProducts(req:Request, res: Response): Promise<any>{
    try {
        const result = await connection("labecommerce_products")

        const getAll = result.map((item)=> {
            return {
                id:item.id,
                name:item.name,
                price:item.price,
                image_url:item.image_url
            }
        })
        res.status(200).send(getAll)
    } catch (error:any) {
        
    }
}