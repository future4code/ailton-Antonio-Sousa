import { app } from "./app";
import { connection } from "./data/connection";
import { postCreateAll } from "./endpoints/postCreateAll";
import { postCreateCep } from "./endpoints/postCreateCep";

// Testes
app.get('/servidorRodando', (req, res)=> {
    res.send("rodando")
})
app.get('/configDB', async (req, res)=> {
    const result  = await connection.raw(`SHOW TABLES`)

    res.send(result)
})
// fim dos teste ✔

// atividade

app.post('/createCep/:cep', postCreateCep)
app.post('/createCepAll/:cep', postCreateAll)

