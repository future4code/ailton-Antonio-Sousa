//- **Exercícios de interpretação de código**
//1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
//A) Vai ser impresso a a multiplicaççao dos dois numeos por 5
//B) não mostraria no console os calculos

//2
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
//A) A funçao converte uma strig para letras minusculas e verifica se contem algo como uma palavara
//B) Já que todas as frases cotem a palavra cenoura, logo no console a verificação sera true

//Exercícios de escrita de código

//1
//  function trocar() {
//      console.log("Eu sou carlos, tenho 20 anos, moro em São Paulo e sou estudante")
//  }
//  trocar()

// //B) 
// let nome = "Pedro"
// let idade = 20
// let endereco = "slz"
// let profissao = "jogador de lol"

// function perfil(x, y, z, w) {
//     console.log(`Eu sou ${x}, tenho ${y} anos, moro em ${z} e sou ${w}`)
// }
// const resposta = perfil(nome, idade, endereco, profissao)
// console.log(resposta)

//2
//A)
// let num1 = 10
// let num2 = 2

// function somar(x, y) {
//     somar = x + y
//     return somar
// }
// console.log(somar(num1, num2))

//B)
// let num1 = 10
// let num2 = 2

// function somar(x, y) {
//     somar = x >= y
//     return somar
// }
// console.log(somar(num1, num2))

//C)
// let num1 = 10
// let num2 = 2

// function somar(x, y) {
//     somar = (x % y) === 0
//     return somar
// }
// console.log(somar(num1, num2))

//D)
// let tex = "OI GaLeRA"
// function palavra(texto) {
//    texto = texto.toUpperCase()
//    let tamanho = texto.length
//    return[texto, tamanho]
// }
// const final = palavra(tex)
// console.log(final)

//3
// let numero1 = 30
// let numero2 = 3

// function somar(num1, num2) {
//     let soma = num1 + num2
//     let mult = num1 * num2
//     let div = num1 / num2
//     let sub = num1 - num2
//     return [soma, mult, div, sub]
// }
// const final = somar(numero1, numero2)
// console.log(final)

// let cateto1 = 4
// let cateto2 = 3
// let hipotenusa = ""

//🏅  Desafios
// function teorema(a, b) {
//    let h  = (a**2 + b**2)**(1/2)
//     return h
// }
// console.log(teorema(cateto1, cateto2))

