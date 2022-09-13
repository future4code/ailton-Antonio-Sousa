import { Usuario } from "../Types/usuarios";
import { connection } from "./connection";

export async function insertUser(usuarioCep:Usuario){

    const {logradouro, bairro, cidade, estado} = usuarioCep
    
    await connection("usuarioCEP").insert(usuarioCep)
   

}