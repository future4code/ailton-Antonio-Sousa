import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getUsers(req:Request, res: Response): Promise<any>{
    try {
        const result = await connection.select("name").from("labeecommerce_users")

        res.status(200).send(result)
    } catch (error:any) {

    }
}