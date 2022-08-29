// type pessoas = {
//     nome:string,
//     idade:number,
//     dataDaConsulta:string

// }

// let users: pessoas[] =  [
//     { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
//     { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
//     { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
//     { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
// ]

// const result = users.sort((a,b)=>{
//     if (a.nome > b.nome) {
//         return 1;
//       }
//       if (a.nome < b.nome) {
//         return -1;
//       }
//       // a must be equal to b
//       return 0;
// })
// console.log(result)

//Exercício 6 // incompleto
//   enum idade  {
//     AC = "AC",
//     DC = "DC"
//   }
//   const ano:number = 2022

//   if (ano > 0 ){
//     console.log(`O ano ${ano} é DC`)
//   }

//desafio 7desafios
// type compras = {
//     nome:string,
//     valor:number,
//     classificacao:string
// }

// let produtos: compras[] = [
//     {nome:"camisa", valor:20, classificacao:"verão"},
//     {nome:"blusa", valor:40, classificacao:"inverno"},
//     {nome:"bikini", valor:120, classificacao:"banho"},
//     {nome:"cueca", valor:330, classificacao:"intimas"}
// ]

// const result = produtos.map((item)=> {
//     if(item.classificacao === "verão"){
//       return  `${item.nome} - ${(item.valor * 0.95).toFixed(2)} - ${item.classificacao}`
//     } else if (item.classificacao === "inverno") {
//        return `${item.nome} - ${(item.valor * 0.9).toFixed(2)} - ${item.classificacao}`
//     } else if (item.classificacao === "banho"){
//         return `${item.nome} - ${(item.valor * 0.96).toFixed(2)} - ${item.classificacao}`
//     } else if (item.classificacao === "intimas"){
//         return `${item.nome} - ${(item.valor * 0.93).toFixed(2)} - ${item.classificacao}`
//     } else {
//         return `${item.nome} - ${(item.valor)} - ${item.classificacao}`
//     }
// })
// console.log(result)

//Desafio 8

type tipos = {
    nome:string,
    valorVenda:number,
    custo:number
}
let pratos = [
    {nome:"ovo frito", valorVenda:400, custo:2},
    {nome:"pastel", valorVenda:100, custo:20}
]
function cadastrar(nome:string) {
   let novaLista = [...pratos, nome]
   console.log(novaLista)
}
cadastrar("teste")

