import { UserDatabase } from "../database/UserDatabase"
import { ICreateInputDTO, ICreateOutputDTO, ILoginInputDTO, ItokenPayload, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }
    public signup = async (input:ICreateInputDTO) => {
        const {name, email, password} = input

        if(name.length < 3){
            throw new Error('Precisa ser maior que tres caracteres')
        }
        if(password.length < 6){
            throw new Error('Precisa ser maior que Seis caracteres')
        }
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            throw new Error('Email no formato inválido')
        }

        const EmailExiste = await this.userDatabase.findByEmail(email)

        if(EmailExiste){
            throw new Error('Email já cadastrado')
        }

        const id = this.idGenerator.generate()
        const hashPassword = await this.hashManager.hash(password)

        const user = new User(id,name, email, password, USER_ROLES.ADMIN)

        await this.userDatabase.createUser(user)

        const payload:ItokenPayload = {
            id:user.getId(),
            role:user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response:ICreateOutputDTO = {
            message:`Usuário ${user.getName()} criado com sucesso !!!`,
            token
        }
        return response
    }

    public login = async (input:ILoginInputDTO) => {
            const {email, password} = input

            if(!email || !password){
                throw new Error('Parametros invalidos')
            }
            if(password.length < 6){
                throw new Error("Parametro inválido, 'password' deve ser  aior que 3 caracteres")
            }
            if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
                throw new Error('Email no formato inválido')
            }

            const userDB = await this.userDatabase.findByEmail(email)

            if (!userDB) {
                throw new Error('Email não cadastrado')
            }

            if(!email){
                throw new Error("Usuário não cadastrado")
            }

            const user = new User(userDB.id, userDB.name, userDB.email, userDB.password, userDB.role)        
            const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())
    
            if(!isPasswordCorrect){
                throw new Error('Usuário ou senha inválido')
            }

            const payload: ItokenPayload = {
                id: user.getId(),
                role:user.getRole()
            }
            const token = this.authenticator.generateToken(payload)

            const response:ICreateOutputDTO = {
                message:`Usuário ${user.getName()} logado com sucesso`,
                token
            }
            return response
        }
}