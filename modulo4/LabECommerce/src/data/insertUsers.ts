import { connection } from "./connection"

export async function insertUsers(id:string, name:string, email:string, password:string){

    const insertUser = await connection.raw(`
    INSERT INTO labeecommerce_users (id, name, email, password)
    VALUES ("${id = Math.floor(Date.now() * Math.random()).toString(36)}", "${name}", "${email}", "${password}")
    
    `)

}