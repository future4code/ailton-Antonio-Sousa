import express from 'express';
import cors from 'cors'
import knex from 'knex';
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

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
//Exercício 1
// A) Não, ela está privada
//B ) UMa VEZ
class User  {
    private id: string;
    private email:string;
    public name:string; // exercicio 5 foi preciso alterar para public
    private password:string;
    public introduceYourself:string

    constructor(id:string, email:string, name:string, password:string, introduceYourself:string){
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.introduceYourself = introduceYourself   //Exercício 4
    }
    public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName():void {
		console.log(`O nome é ${this.name}`)
	}
    public getPassWord(): string {
        return this.password
        
    }
}
//Exercício 2
// A) Uma vez
// B) Duas vezes, Pois o Super chama mais uma vez o classe User
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      introduceYourself:string,
      creditCard: string,
      purchaseTotal:number
    ) {
      super(id, email, name, password, introduceYourself);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
      this.purchaseTotal = purchaseTotal
    }
    public getCreditCard(): string {
      return this.creditCard;
    }
    public getPurChaseTotal():number{
        return this.purchaseTotal;
    }
    //Exercício 5
    public getIntroduceYourself():string{
        return `Olá, sou ${this.name}. Bom dia!`;
    }
  }

//Exercício 3


const credit = new Customer("002", "enzo@gmail.com", "enzoGamer", "321","olá bom dia!", "credit", 30)
const usuario = new User("001", "@gmail.com", "pedro", "1234", "Olá, bom dia!")  
// console.log(usuario.getId())
// console.log(usuario.getEmail())
// console.log(usuario.getName())
// console.log(usuario.getPassWord())
// console.log(credit.getId())
// console.log(credit.getEmail())
// console.log(credit.getName())
// console.log(credit.getPassWord())
// console.log(credit.getIntroduceYourself())
// console.log(credit.getCreditCard())
// console.log(credit.getPurChaseTotal())
// A) enquanto não é feito nenhuma requisiçao as informções podem ser mostradas no console



//Polimorfismo
//Exercício 1

export interface Client {
    name:string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }
  //Exercício 1
 // A) todos as propriedades foram impressas

  console.log(client.name)
  console.log(client.registrationNumber)
  console.log(client.consumedEnergy)
  console.log(client.calculateBill())


  //Exercício 2

  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
  // A) Erro no abstract new Place("95959")
  // B) Transformando ela em um filho

  // Exercício 3



















app.listen(3003, ()=> {
    console.log("http://localhost:3003")
})
