import * as bcrypts from 'bcryptjs'
import { app } from './app'

// Exercício 1

// A) round:       --  salt:Cadeira de caracteres aleatórios
async function  hashDaSenha(senha:string){
  const cost = 12
  const salt = await bcrypts.genSalt(cost)
  const hash = await bcrypts.hash(senha, salt)
  console.log(hash)
}
hashDaSenha('Carlos2001')
