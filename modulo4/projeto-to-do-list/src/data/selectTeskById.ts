import { connection } from "..";

export default async function selectTeskById(id:string):Promise<any>{

    const result = await connection.raw(`
    SELECT tasks.*, users.nickname FROM to_do_list_tasks as tasks
    JOIN to_do_list_users as users
    ON author_id = users.id
    WHERE tesks.id ="${id}";
    
    `)
    return result[0][0]
}