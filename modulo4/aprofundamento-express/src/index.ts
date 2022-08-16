import express, { response } from 'express'
import cors from 'cors'
import { request } from 'http'

const app = express()
app.use(express.json())
app.use(cors())
//ex1
app.get("/teste", (request, response)=>{
    response.send("Pong! 🏓") 
})
//ex2
type Users = {
    nome:string,
    userId:number,
    id:number,
    title:string,
    completo: Boolean
}

const array:Users[] = [
    {userId: 1, id:1, nome: "pedro",  title: "bla bla bla bla", completo:true},
    {userId: 2, id:2, nome: "Lucas", title: "fla fla fla fla" , completo:false} ,
    {userId: 3, id:3,  nome: "Enzo", title: "cla cla cla cla"  , completo:true},
    {userId: 4, id:4,  nome: "Bruno", title: "gla gla gla gla" , completo:false} 
]
//ex3
app.get("/afazeres", (request, response)=> {
    response.send(array)
})
//ex4
app.get("/completo/:completo", (request, response)=> {
    
   let completo:boolean = request.params.completo === "true" ? true : false
         
    const acharCompleto: Users[] = array.filter((item)=> {
        return item.completo === completo
    })
    console.log(request.params.completo)
    response.send(acharCompleto)
})
//ex5
app.post("/criarAfazer", (request, response)=> {
    const {userId, id, nome, title, completo} = request.body
    
    const novaLista: Users = {
        nome,
        userId,
        id,
        title,
        completo, 
    }
    array.push(novaLista)
    response.send(array)
})


//ex6


//ex7
app.delete("/deletarTarefa/:id", (request, response)=> {
    const id= Number(request.params.id)
    const delTarefa: Users[] = array.filter((item)=> {
        return item.id !== id
    })
    response.send(delTarefa)
})

//ex8

app.get("/tarefaId/:id", (request, response)=> {
    const idUser = Number(request.params.id)

    const tarId = array.filter((item)=> {
        return item.userId === idUser
    })
    response.send(tarId)
})

app.listen(3003, ()=>{
    console.log("Sever is runnig in http://localhost:3003")
})