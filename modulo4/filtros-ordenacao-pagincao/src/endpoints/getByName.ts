import { Request, Response } from "express";
import { connection } from "../data/connection";

// A)
export async function getByName(req: Request, res: Response): Promise<any> {
    try {
        let name = req.query.name 

        if(!name){
            name =  ""
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        const result = await connection("aula48_exercicio").where("name", "LIKE", `${name}`)
    
        const getName = result.map((item: any) => {
            return {
                id: item.id,
                name: item.name,
                email: item.email,
                type: item.type
            }
        })
        
        res.status(200).send(getName)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


