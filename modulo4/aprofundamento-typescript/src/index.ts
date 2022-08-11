//Exercício 1
//A) let minhaString:string = 27 não é do tipo number
//B) let meuNumero:number | string = "carlos"+20
//C) //D)
// type pessoa = {
//     nome:string,
//     idade:number,
//     corFavorita: string
// }
// enum corFavorita {
//     Azul = "Azul",
//     Amarelo = "Amarelo",
//     Verde = "verde",
//     Vermelho = "vermelho"
// }
// let user: pessoa = {
//     nome:"Carlos",
//     idade: 20,
//     corFavorita: corFavorita.Amarelo
// }
// let usuarios: pessoa = {    
//     nome:"Bruno",
//     idade: 27,
//        corFavorita: corFavorita.Verde
// }
// let people: pessoa = {    
//     nome:"Bruno",
//     idade: 27,
//    corFavorita: corFavorita.Azul
// }

//Exercício 2
// function obterEstatisticas(numeros:number[]):void{
//     const numerosOrdenados = numeros.sort(
//         (a:number, b:number) => a - b
//     )
//     let soma = 0
//     for (let num of numeros) {
//         soma += num
//     }
//     const estatisticas: {maior:number, menor:number, media:number}  = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }
//   console.log(estatisticas)
// }
// console.log(obterEstatisticas([10]))

//B :number[] no parametro vai receber um array de numeros e vai retornar um number ou any
// em (maior, menor, media) serão todos números

//C

//Exercício 3

// type postar = {
//     autor:string,
//     texto:string
// }
// const posts: postar[] = [
//     {
//       autor: "Alvo Dumbledore",
//       texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//       autor: "Severo Snape",
//       texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//       autor: "Hermione Granger",
//       texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//       autor: "Dobby",
//       texto: "Dobby é um elfo livre!"
//     },
//     {
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!"
//     }
//   ]
//   function buscarPostsPorAutor(posts:string[], autorInformado:string) {
//     return posts.filter(
//       (post:any) => {
//         return post.autor === autorInformado
//       }
//     )
//   }

//Exercício 4
