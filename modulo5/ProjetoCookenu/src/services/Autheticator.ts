import * as jwt from 'jsonwebtoken'

export class Autheticator {
    public authetic(input:string):string{
        const token = jwt.sign(
            {input}, 
            process.env.JWT_KEY!, 
            {expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,}
            );
        return token
    }
    public getVerifyToken(token:string):string{
        const data = jwt.verify(token,process.env.JWT_KEY!)
        return data as string
    }
}