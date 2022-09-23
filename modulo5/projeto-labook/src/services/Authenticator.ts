import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default class Authenticator {
    
    generateToken(id:string): string{

        const token = jwt.sign(
            {
                id,
            },
            process.env.JWT_KEY as string,

            {expiresIn: process.env.JWT_EXPIRATION_TIME}
        )
        return token;
    }

    getTokenData(token: string){

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string) as any

        return payload.id

    }
}