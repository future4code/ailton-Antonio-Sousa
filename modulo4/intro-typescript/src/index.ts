// Exercício 1  

// function checaTriangulo (a:number, b:number, c:number):string{
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

// Exercício 2 

// function imprimeTresCoresFavoritas() {
//     const cor1:string = prompt("Insira sua primeira cor favorita")
//     const cor2:string = prompt("Insira sua segunda cor favorita")
//     const cor3:string = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

// Exercício 3  

// function checaAnoBissexto(ano:number):boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }
//  const bix = checaAnoBissexto(2018)

//  console.log(bix)

//Exercício 4 
// function comparaDoisNumeros(num1:number, num2:number):number {
//     let maiorNumero:number;
//     let menorNumero:number;

//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }

//     const diferenca = maiorNumero - menorNumero;

//     return diferenca 
//   }
//   console.log(comparaDoisNumeros(6, 10))

//Exercício 5

// function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number ):string {
//     let idade = anoAtual - anoNascimento
//     let tempoCarteira = anoAtual - anoEmissao

//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"

//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"

//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"

//        }else {
//            return "error"
//        }
//    }

//Desafios 6
//A, B, C, D)
// let somar: number
// let subt: number
// let mult: number

// function math(n1: number, n2: number): number[] {
//     somar = n1 + n2
//     subt = n1 / n2
//     mult = n1 * n2
//     if(n1 > n2) {
//         console.log(`O número ${n1} é maior que o ${n2}`)
//     } else {
//         console.log(`O número ${n2} é maior que o ${n1}`)
//     }
//     return [somar, subt, mult, ]
// }
// console.log(math(6, 2))

//Desafios 7

// function textoDna(dna:string):any {
//     let rna:string = ""

//     for(let i = 0; i < dna.length; i++ ){
//         if(dna[i] === "A"){
//             rna += "U"
//         } else if (dna[i] === "T"){
//             rna += "A"
//         } else if (dna[i] === "G") {
//             rna += "C"
//         } else if (dna[i] === "C"){
//             rna += "G"
//         } else {
//             rna += dna[i]
//         }
//     }
//     return rna
// }
// console.log(textoDna("ATTGCTGCGCATTAACGACGCGTA"))

//Desafios 8 

// function inventer(texto:string){

//   return  texto.split("").reverse().join("")
    
// }
// console.log(inventer("Reverse"))

// Exercício 9 

