import { User } from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {

    public async createUser(user:User){
        try {
            await BaseDatabase.connection('user_cookenu')
            .insert({
                id:user.getId(),
                name:user.getName(),
                email:user.getEmail(),
                password: user.getPassWord()
            })
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async findUserByEmail(email:string): Promise<User>{
        try {
            const user = await BaseDatabase.connection("user_cookenu")
            .select("*").where({email:email})
            return user[0] && User.toUserModel(user[0])
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
      
    }
    
    public async getAllusers(): Promise<User[]>{

        try {
            const users = await BaseDatabase.connection("user_cookenu")
            .select('id', 'name', 'email');
           
            return users.map((user => User.toUserModel(user)))

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    
    }

    public async insertFollow(idSeguir:string, id_seguindo:string): Promise<string> {
        try {
            await BaseDatabase.connection('seguidores')
            .insert({
                id_seguir:idSeguir,
                id_seguindo:id_seguindo
            })

            return `Pessoa com if ${idSeguir} esta seguindo a pessoa com id ${id_seguindo}`
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}
