import { connection } from "./connection";

export async function insertProducts(id:string, name:string, price:number, image_url:string){

       await connection.raw(`
       INSERT INTO labecommerce_products (id, name, price, image_url)
       VALUES("${id = Math.floor(Date.now() * Math.random()).toString(36)}", "${name}" , ${price}, "${image_url}")
       `)
}