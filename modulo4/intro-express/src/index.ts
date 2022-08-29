 import express from "express";
 import cors from "cors";
 import { usuarios } from "./data";
 import { Posts } from "./post";

 const app  = express()

 app.use(express.json());
 app.use(cors());


app.get("/teste-api", (request, response)=>{
    response.send("A porta teste funcionou") 
})

app.get("/retornarUsers", (request, response)=>{  
    response.send(usuarios)
})

app.get("/retornarUsers/:name", (request, response)=>{
    const name = request.params.name
    const users = usuarios.filter((item)=>{ 
        return item.name === name
    })
    response.send(users)
})

app.get("/retornarPost", (resquest, response)=> {
    response.send(Posts)
})


app.delete("/deletarPost/:title", (resquest, response)=>{
    const title = resquest.params.title

    const deletar = Posts.filter((item)=>{
        return item.title !== title
    })
    response.send(deletar)
})

app.listen(3003, ()=>{
    console.log("teste da porta")
})