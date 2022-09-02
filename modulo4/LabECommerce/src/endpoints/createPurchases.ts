import {Request, Response} from 'express';
import { insertPurchase } from '../data/insertPurchase';
import { selecProducts } from '../data/selectAllproducts';
import { selectUser } from '../data/selectUser';
import { PurchaseData } from '../Types/PurchaseData';


export async function createPurchases(req:Request, res:Response){
    try {
        const {user_id, product_id, quantity} = req.body

        if(!user_id || !product_id || !quantity){
            throw new Error("Todos os valores devem ser preenchidos")
        }

        const userAlreadyExist = await selectUser(user_id)

        if(!userAlreadyExist){
            throw new Error('Usuario não encontrado')
        }
        
        const productAlreadyExist = await selecProducts(product_id)

        if(!productAlreadyExist){
            throw new Error('Produto não encontrado')
        }

        //calculando o preço total
        const total_price:any = productAlreadyExist.price * quantity
        const purchase: PurchaseData = {
            id:Date.now().toString(),
            user_id,
            product_id,
            quantity,
            total_price
        }
        
        const anwser = await insertPurchase(purchase)

        res.status(200).send(anwser)
    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}