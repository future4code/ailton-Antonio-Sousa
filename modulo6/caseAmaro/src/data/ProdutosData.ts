import Produtos from "../model/Produtos";
import { BaseDatabase } from "./BaseDataBase";


export class ProdutosData extends BaseDatabase {
    async createProduto(produto:Produtos){

    //    await this.getConnetion().insert({
    //     id:produto.getId(),
    //     name:produto.getName(),
    //     tags:produto.getTags()
    //    }).into('produtosAmaro')

    //    return 'Produto cadastrado'
    }
  
}