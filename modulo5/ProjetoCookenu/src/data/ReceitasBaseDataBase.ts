import { Receitas } from "../model/Receitas"
import { BaseDatabase } from "./BaseDataBase"



export class ReceitasBaseDatabase extends BaseDatabase{

    public async createReceita(receita:Receitas){
        try {
                 await BaseDatabase.connection('receitas')
                 .insert({
                    id:receita.getId(),
                    title:receita.getTitle(),
                    descricao:receita.getDescricao(),
                    preparo:receita.getPreparo(),
                    data:receita.getData(),
                    user_id:receita.getUser_id()
                 })
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}