import { UserData } from "../data/UserData";
import User, { loginDTO, UsuarioDTO } from "../models/User";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/idGenerator";

export class UserBussines {
    async create(userDTO:UsuarioDTO){
        const {name, email, password, role} = userDTO

        if(!name || !email || !password || !role){
            throw new Error("informações incorretas")
        }

        const userData = new UserData()

        const verifyEmail = await userData.getVerifyEmail(email)

        if(verifyEmail){
            throw new Error("Email já cadastrado")
        }

        const id = new IdGenerator().idGenerator()

        const hashManager = await new HashManager().hash(password)

        const user = new User(id, name, email, hashManager, role)

        const response = await userData.createUser(user)

        const token = new Authenticator().generateToken(id)

        return token

    }

    async login(loginDTO:loginDTO){
        const {email, password} = loginDTO

        if(!email || !password){
            throw new Error("Email não cadastrado")
        }
        const userData = new UserData()
        const userDB = await userData.getVerifyEmail(email)

        const correctPassword = await new HashManager().compare(password, userDB!.getPassWord() )
        if(!correctPassword){
            throw new Error("Email ou senha incorretos")
        }
   
        const token = new Authenticator().generateToken(userDB!.getId())
   
        return token
    }
}