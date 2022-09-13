import express from 'express';
import cors from 'cors';
import knex from 'knex'
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app = express();
app.use(express.json())
app.use(cors())
const BASEURL = "https://labenews.herokuapp.com"

//Exercício 1
// A) GET
// B) any[]
// C)
// async function getSubs():Promise<void>{
//     const result  = await axios.get(`${BASEURL}/subscribers`);
//     console.log(result.data);
// }
// getSubs()

// Exercício 2
// A)
// B)
// const ArrowSubs = async():Promise<any> => {
//     const response  = await axios.get(`${BASEURL}/subscribers`);
//    console.log( response.data);
// }
// ArrowSubs()

// Exercício 3
// A) Sim, a função espera um retorno
type user = {
	id: string;
	name: string;
	email: string;
}
// const ArrowSubs = async(): Promise<user[]> => {
//     const response  = await axios.get(`${BASEURL}/subscribers`);
//     return response.data
// }

// B)
// C)

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${BASEURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };


// Exercício 4

const news = {
    title: "Brasil conquista hexa no catar",
    content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
    date: Date.now()
}

type subscriber = {
    id: string,
    name: string,
    email: string
}

const createNews = async (news: any): Promise<void> => {
    axios.put(`${BASEURL}/news`, news)
}





  const main = async () => {
    try {
        createNews(news)
        await getSubscribers()
        getSubscribers()
    } catch (error:any) {
        const resp = error.message?.data || error.message
        console.log(resp)
    }
  }
  main()



app.listen(3003, () => {
    console.log("Rodando em http://localhost:3003")
})

