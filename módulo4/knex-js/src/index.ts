import express from 'express';
import cors from 'cors';
import knex from 'knex';

const app = express()
app.use(express.json())
app.use(cors())

// aqui ficava o connect

app.get("/getUser", async (req, res) => {
    try {
        const allUsers = await connection.raw(`SELECT * FROM Actor`)
        res.send(allUsers[0])

    } catch (erro: any) {
        // res.status(res.statusCode || 500).send({message: error.message})
    }
})
// B)
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(
  `SELECT * FROM Actor WHERE name LIKE "%${name}%"`
    );
    return result[0][0];
  };

app.get("/buscarUser/:name", async (req, res) => {
    try {
    
        let nameUSer = req.params.name  
        res.send(await getActorByName(nameUSer))
     

    } catch (erro: any) {

    }
})



const getActorByGender = async (gender:string): Promise<any> => {
    const resultado = await connection.raw(
      //  SELECT id, name, gender FROM Actor WHERE gender = "${gender}"
        ` SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`
    );
    return resultado[0][0];
}

app.get("/searchGender/:gender" , async(req, res)=> {
    try {
            let genderUser = req.params.gender
            res.send(await getActorByGender(genderUser))


    } catch (error:any) {
        
    }
})

//  exercicio 2 a) erro na letra c

const updateActor = async (id:string, salary:number): Promise<any>=>{
    const result = await connection(
       "Actor"
    ).update ({salary}).where ("id", id)
    return await connection("Actor").select("*").where("id", id)
}

app.put("/updateSalary/:id", async (req, res) => {

    try {
            
    const idSalary = req.params.id
    const userSalary:number = req.body.salary

   

    if(!idSalary || !userSalary){
        res.statusCode = 404
        throw new Error("Preencha todos os campos")
    }

    res.send( await updateActor(idSalary, userSalary))

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

})

//  exercicio 2 b)

const deleteActor = async (id:string): Promise<any> => {
    const delUser = await connection.raw(`
        DELETE FROM Actor WHERE id = "${id}"
    `);
    return delUser[0][0]
}

app.delete("/deleteActor/:id", async(req, res)=> {

    try {
        const del = req.params.id

        if(del === ""){
            res.statusCode = 404
            throw new Error("Preencha todos os campos")
        }


        res.send(deleteActor(del))

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
 
});

//  exercicio 2 c)

const salaryAvg = async (gender:string):Promise<any> => {
    const avg = await connection.raw(`
        SELECT AVG(salary) FROM Actor WHERE gender = "${gender}"
    `);
    return avg[0][0];
}

app.get("/returnAvg'/:gender", async (req, res)=> {
    const resGender = req.params.gender

    res.send(await salaryAvg(resGender))
})


app.post("/createUser", async (req, res) => {
    try {
        const { id, name, salary, birth_date, gender, favorite_ice_cream } = req.body;

        if (!id || !name || !salary || !birth_date || !gender || !favorite_ice_cream) {
            res.statusCode = 404
            throw new Error("Preencha todos os campos")
        } // essa verirficção deu erro por falta do  !type

        const insertUser = await connection.raw(`
        INSERT INTO Actor (id, name, salary, birth_date, gender, favorite_ice_cream)
        VALUES("${id}","${name}",${salary},"${birth_date}","${gender}","${favorite_ice_cream}" );
        `)
        res.status(201).send(`o usuario^${name} foi criado`)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})



app.listen(3003, () => {
    console.log("sever is runing http://localhost:3003")
})



