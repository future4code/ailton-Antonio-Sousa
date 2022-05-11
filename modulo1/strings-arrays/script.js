// 1
// let array   // o valor esta indefinido e sera impresso undefined
// console.log('a. ', array)

// array = null // o valor retornara nulo
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // vai mostrar quantos elementos possui o array

// let i = 0
// console.log('d. ', array[i]) // vai mostrar o que tem dentro de i

//  array[i+1] = 19
//  console.log('e. ', array)  // O valor na posição 1 sera alterado para 19

// const valor = array[i+6]
// console.log('f. ', valor) o valor na posição 6 sera alterado para 6

// 2 
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// // todas as vogais (A) serao substituidas por (I), e tambem o tamanho do array

//Exercícios de escrita de código

// 1
// let nome = prompt("Qual o seu nome ?")
// let email = prompt("Qual o seu Email ?")
// console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(o) ${nome}`)

//2
// let comidas = [
//     "camarão",
//     "pudim",
//     "bolo de cenoura",
//     "strogonoff",
//     "chocolate"
// ]
// console.log(comidas)
// console.log(`Minhas comidas favoritas
// ${comidas [0]} 
// ${comidas [1]} 
// ${comidas [2]} 
// ${comidas [3]} 
// ${comidas [4]}`)

// let comidaUsuario = prompt("Qual sua comida favorita ?")
// comidas [1] = comidaUsuario
// console.log(comidas)

//3
// let listaDeTarefas = [""]
// let tarefa0 = prompt("Qual sua primeira tarefa ?")
// let tarefa1 = prompt("Qual sua segunda tarefa ?")
// let tarefa2 = prompt("Qual sua terceira tarefa ?")

// listaDeTarefas = [tarefa0, tarefa1, tarefa2]
// console.log(listaDeTarefas)

// let tarefasFeitas = Number(prompt("Qual tarefa ja voce ja realizou: 0, 1 ou 2 ?"))
// listaDeTarefas.splice(tarefasFeitas, 1)
// console.log(listaDeTarefas)


//Desafios
//Receba uma frase e retorne um array onde cada 
//elemento é uma das palavras da frase, ignorando os espaços

// let frase = "Oi meu nome é carlos"
// let splits = frase.split(" ", 8 )
// console.log(splits)

// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que 
// acha o índice da palavra Abacaxi e 
// imprime tanto o índice quanto o tamanho do array

let frutas = [
    "Banana",
    "Morango",
    "Abacaxi",
    "Laranja",
    "Ameixa",
]
let index = frutas.indexOf("Abacaxi")
console.log(index)
