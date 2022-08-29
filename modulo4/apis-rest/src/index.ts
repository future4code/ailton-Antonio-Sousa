import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());


enum userType {
    ADMIN = "ADMIN",
    NORMAL= 'NORMAL'
}
type Usuario = {
    id:number,
    name:string,
    email:string,
    type: userType,
    age:number
}


let users: Usuario[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type:  userType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userType.ADMIN,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userType.NORMAL,
        age: 60
    }
]



app.get("/api-rest",(request, response)=> {
    response.send("teste da api")
})


//ex01 mostrar lista

// app.get("/api-users", (request, response)=>{
//     response.send(users)
// })
// a) Método get
// b) entidade de busca

//ex02

app.get("/apiType/:type", (request, response)=> {
    const Type = request.params.type

    let resultId = users.filter((item)=>{
        return item.type === Type
    })
    response.status(200).send(resultId)
})
//A)passo o cominho e recebo esse valor pelo paramns
//b)feito na linha 10 a 20
 

//ex03

app.get("/api-users/:name", (request, response)=>{
let erroCode = 400
    try {
        const name = request.params.name

        let resultName = users.filter((item)=>{
          return item.name === name
        })
      
        if(!resultName.length){
            erroCode = 404

            throw new Error(`Esse usuário não foi encontrado ${name}`)
        }
      
        response.send(resultName)

    } catch (error:any) {
        response.status(erroCode).send({message: error.message})
    }
 
})

//a)request.params
//b)feito


//ex04

app.post("/apis-add", (request, response)=>{
    const {id, name, email, type, age} = request.body as Usuario

    const addUser = {
        id,
        name,
        email,
        type,
        age
    }

    users.push(addUser)

    response.send(users)
})

//a) não mudou nada
// b) O put normalmente é usado para atualizar, já o POST é usado para criar, então nessa situação o POST é a melhor opção

//Desafios ex05

app.put("/api-alterar/:id", (request, response)=> {
    const { id } = request.params.id as any;
    const { name } = request.body as Usuario;


    const productIndex = users.findIndex((item)=> {
       return  item.id === id
    });

    // Alteração do preço do produto selecionado.
    users[productIndex].name = name;

    response.status(200).send({
        message: "Product has been modified successfully!",
        product: users[productIndex]
    });

})


// Desafios ex06
app.patch("/apis-add", (request, response)=>{
    const {id, name, email, type, age} = request.body as Usuario

    const addUser = {
        id,
        name,
        email,
        type,
        age
    }

    users.push(addUser)

    response.send(users)
})


// Desafios ex007

app.delete("/apis-delete/:id", (request, response)=> {
    const delId = Number(request.params.id)

    let resultDel = users.filter((item)=>{
        return item.id !== delId
    })

    response.send(resultDel)
})

app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003 ")
})