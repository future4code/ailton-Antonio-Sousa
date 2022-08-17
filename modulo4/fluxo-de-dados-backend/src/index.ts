import express, { response } from 'express';
import cors from 'cors'
import { arrayProdutos, Produtos } from './data';
import { type } from 'os';

const app = express()

app.use(express.json())
app.use(cors())


//ex1 teste

app.get("/teste", (request, response) => {
    response.send("Teste da api")
})

//ex3 criar novo produto

app.post("/CriarProduto", (request, response) => {
    try {

        const { id, name, price } = request.body as Produtos
       

        const novoProduto: Produtos = {
            id,
            name,
            price
        }

        if(!id && !name && !price){
            response.statusCode = 401
            throw new Error("Erro nos valores")
        }  else if(typeof(novoProduto.price) !== "number"){
            response.statusCode = 401
            throw new Error("Isso não é um número")
        } else if(typeof(novoProduto.name) !== "string"){
            response.statusCode = 401
            throw new Error("Isso não é uma palavra")
        }
        else if (price < 0){
            response.statusCode = 401
            throw new Error("Não pode ser menor que zero")
        }

        arrayProdutos.push(novoProduto)
        response.send(arrayProdutos)

    } catch (error: any) {
        response.status(response.statusCode || 500).send({ message: error.message })
    }

})


//ex4 retorna todos os produtos

app.get("/produtos", (request, reponse) => {
    reponse.send(arrayProdutos)
})

//ex5 editar preço

app.put("/editPrice/:id", (request, reponse) => {
    let idPrice = request.params.id


})

//ex6 apagr item
app.delete("/produtoDeletar/:id", (request, response) => {
    try {
        const delId = request.params.id 

        let resultDel = arrayProdutos.filter((item) => {
            return item.id !== delId
        })

        let filterDois = arrayProdutos.filter((item)=> {
            return item.id === delId
        })

        if(filterDois.length === 0){
            response.statusCode = 401
            throw new Error("Não existe este produto")
        }
       
        response.send(resultDel)
    } catch (error:any) {
         response.status(response.statusCode || 500).send({ message: error.message })
    }
})

//ex7



app.listen(3003, () => {
    console.log("Esta é a url http://localhost:3003")
})