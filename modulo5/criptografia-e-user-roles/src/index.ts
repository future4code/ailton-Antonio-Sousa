import * as bcrypts from 'bcryptjs'
import { app } from './app'

// Exercício 1
app.get('/verSenha', async (req, res)=> {

  async function  hashDaSenha(senha:string){
    const cost = 12
    const salt = await bcrypts.genSalt(cost)
    const hash = await bcrypts.hash(senha, salt)
    return hash
  }
  async function compare(senha:string, hash:string){
    return  bcrypts.compare(senha, hash)

  }
  const hash = await hashDaSenha('Carlos2001')
  console.log(hash)
  const senhaComparada = await compare("Carlos2001",hash)
  console.log(senhaComparada)
})
// A) round:       --  salt:Cadeira de caracteres aleatórios



