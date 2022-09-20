import * as bcrypt from 'bcryptjs'

export class HassManager {
    public async passHash(text:string): Promise<string>{
        const cost = Number(process.env.BCRIPT_COST)
        const salt = await bcrypt.genSalt(cost)

        return bcrypt.hash(text, salt)
    }

    public async compare(text:string, hash:string): Promise<boolean>{
        return bcrypt.compare(text, hash)
    }
}