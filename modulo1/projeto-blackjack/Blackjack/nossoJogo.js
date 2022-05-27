/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack")

if(confirm("Quer iniciar uma nova rodada ?")) {
      console.log("Nova rodada")
} else {
   console.log("O jogo acabou")
}

let usuarioUm = comprarCarta()
let usuarioCartaDois = comprarCarta()
let carta1Pc = comprarCarta()
let carta2Pc = comprarCarta()

let resultadoUsuario = usuarioUm.valor + usuarioCartaDois.valor
let resultadoPc = carta1Pc.valor + carta2Pc.valor


const carta = comprarCarta(function(){
    carta[Math.floor(Math.random() * 13)]
}); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

console.log(`Usuário - cartas ${usuarioUm.texto} `)
console.log(`computador - cartas ${usuarioCartaDois.texto}`)

if(resultadoUsuario > resultadoPc) {
   console.log("Resultado: O usuário ganahou!")
} else if (resultadoUsuario === resultadoPc){
   console.log("Resultado: Empate")
} else {
   console.log("Resultado: usuário perdeu!")
}

console.log("O jogo acabou, aperte F5")