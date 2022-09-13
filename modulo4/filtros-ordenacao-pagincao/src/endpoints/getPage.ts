import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getPage(req:Request, res:Response): Promise<any>{
    try {
  
        let typePage = req.query.type
        let pagina = Number(req.query.pagina)
        const produtosPorPagina = 2
        const offset = produtosPorPagina * (Number(pagina) -1)

        const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE type LIKE "${typePage}"
        limit 2
        offset ${offset}
        `)

        const getPage = result[0].map((item:any)=> {
            return {
                id:item.id,
                name:item.name,
                email:item.email,
                type:item.type
            }
        })
        res.send(getPage)

    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}