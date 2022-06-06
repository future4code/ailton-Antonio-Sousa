//1)
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//A) O  código pede um némero ao usuário qu depois é gurddo mem uma
// variável em forma de um number, e depois verifica se o numero é par ou impa 
//B) Números pares
//C) Números impares

//2 )
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//A)O código vai mostrar ao usuário o preço da fruta que ele escolher.
//B) "O preço da fruta ", maçã, " é ", "R$ ", 2.25
//C) a mensagem seria impressa mas o programa tentaria rodar mais linhas e daria erro

//3 )
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//A) Está pedindo ao usurio um número e convertendo ele ao tipo number
//B) Se for (10) o programa passa e mostra "essa número passou no teste"
// se for(-10) não mostra nada
//C)A várivel mensagem essa sendo passada dentro da function e não no escopo global

//Exercícios de escrita de código
//1)

// let idade = Number(prompt("Qual a sua idade ?"))

// if (idade >=18) {
//     console.log("Pode dirigir")
// } else  {
//     console.log("Não pode dirigir")
// }

//2)

// let horas  = prompt("Digite o seu turno: M para matutino, V para vespertino e N para noturno")

// if (horas === "M") {
//     console.log("Bom dia")
// } else if(horas === "V"){
//     console.log("Boa tarde")
// } else if (horas === "N") {
//     console.log("Boa noite")
// } else {
//     console.log("Não possui turno")
// }

//3)
// let horas  = prompt("Digite o seu turno: M para matutino, V para vespertino e N para noturno")

//  switch(horas) {
//     case "M":
//         console.log("Bom dia");
//         break
//     case "V":
//         console.log("Boa tarde");
//         break;
//     case "N":
//         console.log("Boa noite");
//         break;
//     default:
//         console.log("Sem turnoaa")
//  }

//4)

// let pessoa = prompt("Qual genero vai esoclher")
// let pessoaUmValor =Number(prompt("Qual valor"))

// let genero = "fantasia"
// let valor = 15

// if (pessoa === genero && pessoaUmValor === valor) {
//     console.log("Bom filme")
// }   else {
//     console.log("Escolha outro filme")
// }

//🏅  Desafios
//1)
// let pessoa = prompt("Qual genero vai esoclher")
// let pessoaUmValor =Number(prompt("Qual valor"))
// let lanchinho = prompt("Qual lachinho vai comprar ? pipoca, chocolate ou salagdos.")

// let genero = "fantasia"
// let valor = 15

// if (pessoa === genero && pessoaUmValor === valor) {
//     console.log(`Aproveite seu(a) ${lanchinho}`)
//     console.log("Bom filme")
// }   else {
//     console.log("Escolha outro filme")
// }

//2 )

let nome =  prompt("Qual seu nome ?")
let tipoJogo = prompt("Qual tipo de jogo")
let etapa = prompt("Qual etapa do jogo: Semifinais, Decisão ou Final ?").toUpperCase()
let categoria = prompt("Qual categoria: 1, 2 ou 3 ?")
let ingresso = Number(prompt("Quantos ingressos você comprou ?"))



console.log("Nome do cliente: ", nome)
console.log("Tipo de jogo: ", tipoJogo)
console.log("Etapa do jogo: ", etapa)
console.log("categoria ", categoria)
console.log("Quantidade de ingressos: ", ingresso)
console.log("---valores---")

