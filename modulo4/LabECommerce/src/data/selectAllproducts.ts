import { connection } from "./connection";

export async function selecProducts(productId:string): Promise<any>{
const [result] = await connection("labecommerce_products")
.select("*").where({id:productId})
return result
}