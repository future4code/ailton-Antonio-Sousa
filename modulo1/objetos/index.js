//1)
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) // será impresso o primeiro elemento doarray elenco(Matheus Nachtergaele)
// console.log(filme.elenco[filme.elenco.length - 1]) // será impresso o ultimo elemento do array alenco
// console.log(filme.transmissoesHoje[2]) // Será impresso o terceiro elememento do objeto

//2)
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) console.log(cachorro): juca, 3, SRD
//a) console.log(gato): o nome juca será substituido por juba
//a) console.log(tartauga): será impresso tudo que contém no objeto gato, mas no nome será trocado a volgal A por O 

//3)
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
//A) Será impresso false
//B) A função esta pedido o retorno do objeto que seria pessoa mais uma propriedade em um array
// logo será impresso apenas o que tiver contido em propriedade'

//Exercícios de escrita de código

//1)
//a)

// const pessoa = {
//     nome: 'Amanda',
//     apelidos: ['Amandinha', 'Mandinha', 'Mandi']
// }

// function perfil(objeto) {
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de, ${objeto.apelidos}`)
// }

// const trocar = {
//     ...pessoa,
//     apelidos: ['Manda', 'MD', 'MM']
// }

// perfil(pessoa)
// perfil(trocar)

//2)
//A)

// const pessoaUm = {
//     nome: 'Pedro',
//     idade: 20,
//     profissao: 'ti'
// }
// const pessoaDois = {
//     nome: 'Renan',
//     idade: 30,
//     profissao: 'Analista'
// }
//B)
// function receberValores(obj) {
    
//     return console.log([obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length])
// }
// receberValores(pessoaUm)
// receberValores(pessoaDois)

//3)
//A)
// let carrinho = []

// const frutasUm = {
//     nome: 'Laranja',
//     disponibilidade: true
// }
// const frutasDois = {
//     nome: 'Banana',
//     disponibilidade: true
// }
// const frutasTres = {
//     nome: 'Uva',
//     disponibilidade: true
// }

// function sacolao(objeto) {
 
//   carrinho.push(objeto)
    
// }
// sacolao(frutasTres)
// sacolao(frutasDois)
// sacolao(frutasUm)
// console.log(carrinho)


//🏅  Desafios
//1)
// function usuario() {
//     let pergunta1 = prompt('Qual seu nome ?')
//     let pergunta2 = prompt('Qual é sua idade ?')
//     let pergunta3 = prompt('Qual é a sua profissão ?')
//     console.log(teste = {pergunta1, pergunta2, pergunta3})
//     console.log(`Nome: ${pergunta1}, profissão: ${pergunta3}, idade: ${pergunta2}`)
//     console.log(typeof teste)
// }
// usuario()

//2) 

// const filmesUm = {
//     lancamento: 2022,
//     nome: 'Homem de ferro',
// }
// const filmesDois = {
//     lancamento: 2022,
//     nome: 'Interestelar',
// }
// function filmes(x, y) {
 
// console.log("O primeiro filme foi lançado antes do segundo ?", x.lancamento < y.lancamento)
  
// console.log("O primeiro filmes foi lançado no mesmo ano do segundo", x.lancamento === y.lancamento)
// }
// filmes(filmesUm, filmesDois)


//3)

// let carrinho = []

// const frutasUm = {
//     nome: 'Laranja',
//     disponibilidade: true
// }
// const frutasDois = {
//     nome: 'Banana',
//     disponibilidade: true
// }
// const frutasTres = {
//     nome: 'Uva',
//     disponibilidade: true
// }

// function sacolao(objeto) {
 
//   carrinho.push(objeto)
    
// }
// function estoque(objeto) {
//    objeto.disponibilidade = true === false
// }
// estoque(frutasUm)
// sacolao(frutasUm)
// sacolao(frutasDois)
// sacolao(frutasTres)
// console.log(carrinho)




