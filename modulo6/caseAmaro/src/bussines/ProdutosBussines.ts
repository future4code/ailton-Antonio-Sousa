import { ProdutosData } from "../data/ProdutosData";
import Produtos, { ProdutosDTO } from "../model/Produtos";

export default class ProdutosBussines {
    async create(produtos:ProdutosDTO){
        const {id, name , tags} = produtos

        if(!id || !name || !tags){
            throw new Error('Preencha os arquivos corretamente')
        }
        const produtosData = new ProdutosData()
        
        const produto = new Produtos(id, name, tags)
        
        const response = await produtosData.createProduto(produto)

        return response
    }

}