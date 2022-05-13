// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    let altura = prompt("Digite a altura")
    let largura = prompt("Digite a largura")
    
   console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let ano = prompt("Digite o ano atual")
  let data = prompt("Qual sua data de nascimento")

  console.log(ano - data)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome") 
  const idade = prompt("Qual sua idade") 
  const email = prompt("Qual seu email") 
  let perfil = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(perfil)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite uma cor favorita")
  let cor2 = prompt("Digite outra cor favorita")
  let cor3 = prompt("Digite masi uma cor favorita")
  let resultado = [cor1, cor2, cor3]
  console.log(resultado)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()
  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let igual = custo / valorIngresso
  return igual

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    let tamanho = string1.length === string2.length
    return tamanho
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array["oi", "ola" , "vish"]
  return array[0]
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array["oi", "ola", "vish"]
  let ultimo = array.pop()
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 let primeiro = array[0]  // salvando o primeiro indice na variavel
 let tamanhoDoArray = array.length // olhando o tamanho do array
 let indice = tamanhoDoArray -1 // descobrindo o final do array com -1
 let ultima = array[indice] // colocando o ultimo elemento do array na variavel ultima
 array[0] = ultima // trocando o primeiro elemento do array pelo ulitmo
 array[indice] = primeiro// trocando o ultimo elemento do array pelo primeiro
 return array // retornando
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let igual = string1.toUpperCase() === string2.toUpperCase()
  return igual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}