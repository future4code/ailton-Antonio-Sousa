import { PurchaseData } from "../Types/PurchaseData";
import { connection } from "./connection";

export async function insertPurchase(purchase:PurchaseData): Promise<string>{

    const {id, user_id, product_id, quantity, total_price} = purchase
    await connection('labecommerce_purchases').insert({
       id,
       user_id:user_id,
       product_id:product_id,
       quantity:quantity,
       total_price:total_price
    })

    return `Compra o id ${purchase.id}`
}