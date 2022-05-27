//1)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
//A) vai imprimir o arrau usuários

//2)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
//A) vai armazenar tudo em novoArrayB e imprimir os nomes de cade item.

//3)
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
//A) Ele vai retornar e imprimir os valores que não possuem o apelido chino


//Exercícios de escrita de código

//1)
//a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  const nomeDogs = pets.map((item, index, array) => {
//      return item.nome 
//  })
//  console.log(nomeDogs)
//B)
// const nomeDogs = pets.filter((item, index, array) => {
//     return item.raca === "Salsicha" 
// })
// console.log(nomeDogs)
//C)
// const dogsDois = []

// const nomeDogs = pets.filter((item) => {
//     return item.raca === "Poodle"
// }).map((item) => {
//     dogsDois.push(` Você ganhou um cupom de desconto de 10% para tosar o ${item.nome}`)
// })
// console.log(dogsDois)

//2)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //A)
// const nomeItens = produtos.map((item) => {
//    console.log(item.nome)
//})
//B)
// const outro = []
// const nomeItens = produtos.map((item) => {
//     console.log((item.preco) * 0.95 )
//  })

 //C)
//  const bebidasItens = produtos.filter((item) => {
//      return item.categoria === "Bebidas"
//  })
//  console.log(bebidasItens)

 //D)
//  const bebidasItens = produtos.filter((item) => {
//     return item.nome.includes("Ypê")
// })
// console.log(bebidasItens)
//E)

//   const bebidasItens = produtos.filter((item) => {
//   return item.nome.includes("Ypê")
// }).map((item) =>{
//     return `Compre ${item.nome} Por ${item.preco}`
// })
//   console.log(bebidasItens)



//🏅  Desafios
//1)
//A)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//  const pokens = pokemons.map((item) => {
//      return item.nome
//  }).sort()
//  console.log(pokens)

 //B)
 const todosOsTipos = pokemons.map((item) => item.tipo)
 const tipos = todosOsTipos.filter((item, i) =>  todosOsTipos.indexOf(item) === i)
 console.log(tipos)


 




