// Exercício 1
// function separar(texto:string,  data:string){
//     let name = texto
//     let res:string[] = data.split("/", 3)
//     let result = `Olá me chamo ${name}, nasci no dia ${res[0]} do mês ${res[1]} do ano de ${res[2]}}`
//     console.log(result)
// }
// console.log(separar("Carlos", "10/12/2001"))

// Exercício 2 
// function tipos(valor:any){
//     return typeof valor
// }
// console.log(tipos(23))

// Exercício 3

// Exercício 4 

// enum setores {
//     marketing = "marketing",
//     vendas = "vendas",
//     financeiro = "financeiro"
// }
// type tipos = {
//     nome:string,
//     salário:number,
//     setor:setores,
//     presencial:boolean
// }
// let trabalhadores: tipos[] = [
// 	{ nome: "Marcos", salário: 2500, setor:setores.marketing , presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: setores.vendas, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor:setores.financeiro, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: setores.marketing, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: setores.financeiro, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor:setores.vendas, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: setores.vendas, presencial: true }
// ]
// function retornarPessoas(trabalhadores:tipos[]){
//     let result = trabalhadores.filter((item)=>{
//         return item.presencial === true
//     })
//     console.log(result)
// }
// retornarPessoas(trabalhadores)

// Exercício 5

// type usuarios = {
//     name:string,
//     email:string,
//     role:string
// }
// let users: usuarios[] =  [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

// function retornaEmail(users:usuarios[]){
//     let result = users.filter((item)=>{
//         return item.role === "admin"
//     }).map((item)=>{
//         console.log(item.email)
//     })
//     console.log(result)
// }

// retornaEmail(users)

// Exercício 6 

// type client = {
//     cliente: string,
//     saldoTotal: number,
//     debitos: number[]
// }
// let clientes: client[] =
//     [
//         { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
//         { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
//         { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
//         { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
//         { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
//         { cliente: "Soter", saldoTotal: 1200, debitos: [] }
//     ]

// const novoDebito = (arr: client[]): client[] => {
//     const valorInicial: number = 0;
//     const clienteMapeado: client[] = arr.map((data) => {
//         const valorDebito: number = data.debitos.reduce(
//             (previousValue, currentValue) => previousValue + currentValue,
//             valorInicial
//         );
//         data.debitos = [valorDebito];
//         data.saldoTotal = data.saldoTotal - data.debitos[0];
//         data.debitos = [];
//         return data;
//     });
//     return clienteMapeado;
// };

// console.table(novoDebito(clientes))

// Exercício 7

// type client = {
//     nome:string,
//     quantidade:number,
//     valorUnitario:number | string
// }

// const ajustaPreco = (preco :number): string => {
// 	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
// 	return "R$ "+valorAjustado
// }

// let array: client[] = [
// 	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
// 	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
// 	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
// 	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
// 	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
// 	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
// 	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
// ]

// const estoqueNew = (array:client[]) =>{
//     const ordenar = array.sort((a, b)=>{
//         return a.quantidade - b.quantidade 
//     }) 
//     return ordenar
// }
// console.table(estoqueNew(array))

// Exercício 8 
// function identidade(nasc:string, ident:string){

//     let resNasc:string[] = nasc.split("/", 3)
//     let resultNasc = parseInt(resNasc[2])

//     let resIdent:string[] = ident.split("/", 3)
//     let resultIdent = parseInt(resIdent[2])

//     if(resultIdent - resultNasc <= 20){
//         console.log("Deve ser renovada de 5 em 5 anos")
//     } else if (resultIdent - resultNasc > 20 && resultIdent - resultNasc < 50){
//         console.log("Deve ser renovada de 10 em 10 anos")
//     } else if (resultIdent - resultNasc > 50){
//         console.log("Deve ser renovada de 16 em 15 anos")
//     }
    
// }

// console.log(identidade("10/12/2001", "25/04/2022"))

// Exercício 9 

// Exercício 10 
