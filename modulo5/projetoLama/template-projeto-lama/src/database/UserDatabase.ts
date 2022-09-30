import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"

    private userModelDB = (user:User):IUserDB => {
        const userDB:IUserDB = {
            id:user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
            role:user.getRole()
        }
        return userDB
    }

    public createUser = async (user:User) => {
        const userDB = this.userModelDB(user)

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
    }

    public findByEmail = async (email:string) => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select('*').where({email})

    return result[0]
    }
}