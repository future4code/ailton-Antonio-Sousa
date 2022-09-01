import { CepAll } from "../Types/usuarios";
import { connection } from "./connection";

export async function insertCepAll(cadastroUserCep:CepAll){

  const {cep, logradouro, numero, complemento, bairro, cidade, estado} = cadastroUserCep

  await connection('allCep').insert(cadastroUserCep)
}