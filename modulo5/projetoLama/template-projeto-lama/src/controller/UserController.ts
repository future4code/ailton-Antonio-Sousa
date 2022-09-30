import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ICreateInputDTO, ILoginInputDTO } from "../models/User";
export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req:Request, res:Response) => {
        try {
            const {name, email, password} = req.body

            const input:ICreateInputDTO ={
                name, email, password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)

        } catch (error:any) {
            res.status(error.statusCode || 500).send({message:error.message})
        }
    }

    public login = async (req:Request, res:Response) => {
      try {
        const {email, password} = req.body

        const input:ILoginInputDTO ={
            email, password
        }

        const response = await this.userBusiness.login(input)

        res.status(200).send(response)
      } catch (error:any) {
        res.status(error.statusCode || 500).send({message:error.message})
      }
    }
}