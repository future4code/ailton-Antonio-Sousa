import { connection } from "./connection";

export async function selectSearchName(byName:string): Promise<string[]>{
    const result = await connection('labecommerce_products')
    .where('name','LIKE' , `${byName}`)
    return result
}