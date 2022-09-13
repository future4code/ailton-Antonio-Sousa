import { connection } from "./connection";

export async function selectUser(userId:string): Promise<any>{
const [result] = await connection("labeecommerce_users")
.select("*").where({id:userId})
return result
}