import { Request, Response } from "express";
import { UserBussines } from "../bussines/UserBussines";
import { loginDTO, UsuarioDTO } from "../models/User";

export class UserController {
    async create(req:Request, res:Response){
        try {
            const {name, email, password, role} = req.body

            const userBussines = new UserBussines()

            const user:UsuarioDTO = {
                name, email, password, role
            }

            const token = await userBussines.create(user)

            res.status(201).send({message:"Usuário criado com sucesso", token})

        } catch (error:any) {
            res.status(201).send()
        }

    }

    async login(req:Request, res:Response){
        const {email, password} = req.body

        const userBussines = new UserBussines()

        const login:loginDTO = {
            email, password
        }

        const token = await userBussines.login(login)


  res.status(200).send({message: "Usuário logado com sucesso !", token})

    }
}