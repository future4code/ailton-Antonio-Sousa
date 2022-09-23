import User from "../models/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserData  extends BaseDataBase {

    async createUser(user:User):Promise<string>{
        await this.getConnetion().insert({
            id:user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassWord(),
            role:user.getRole()
        }).into('Labook_Users')

        return `Usuário ${user.getName()}cadastrado com sucesso`
    }


    
    async getVerifyEmail(email:String):Promise<User | undefined>{
        const result = await this.getConnetion()
        .select('*').from('Labook_Users')
        .where({email})

        if(!result.length){
            return undefined
        }
        return new User(result[0].id, result[0].name, result[0].email, result[0].password, result[0].role)
    }
}