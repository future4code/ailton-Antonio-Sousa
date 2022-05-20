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
let usuario = []
let computador = []

let cartasOne = false
while (!cartasOne) {
   usuario.push(comprarCarta())
   usuario.push(comprarCarta())
   computador.push(comprarCarta())
   computador.push(comprarCarta())
   if ((usuario[0].valor === 11 && usuario[1].valor === 11) ||
   (computador[0].valor === 11 && computador[1].valor === 11)) {
      usuario = []
      computador = []
   } else {
      cartasOne = true
   }
}
//mostrar cartas e pergunta se o usuario ainda quer cartas

let compra = true

while(compra) {
   let textoUm = ''
   let pontos = 0
   for(let carta of usuario){
      textoUm += carta.texto + ' '
      pontos += carta.valor
   }
   if (pontos > 21){
      comprando = false
   } else {
      let confirmarCompra = confirm(
         "Suas cartas são", textoUm, "A carta revelada do computador é", computador[0].texto,
         "Deseja comprar mais uma carta?"
      )
   
      if (confirmarCompra){
         usuario.push(comprarCarta())
      } else {
         comprando = false
      }
   }
}


