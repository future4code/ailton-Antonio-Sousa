import { connection } from "./connection";

export async function selectOrder(byOrder:string){
   const result =  await connection('labecommerce_products')
    .select('*').orderBy('name', `${byOrder}`)
    return result
}