// 1 
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2 // (A) o resultado sera false, ja que true com false é false
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 // (B)o resultado sera false, ja que !bool2 é o contrario de bool2 entao sera false com false = false
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) // (C)o resultado sera true ja que bool1 é true 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado) (D) bo0leano

2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// esta tentando somar duas strings ja que falta as ""

//Exercícios de escrita de código

// 1
// let idade = prompt("Quaal sua idade ?")
// let melhorAmigo = prompt("Qual idade do seu melhor amigo ?")

// let valor = idade > melhorAmigo
// console.log(valor)

2
// let par = Number(prompt("Digite um número par"))
// let resto = par % 2
// console.log(resto)

3
// let idade = Number(prompt("Qual sua idade ?"))

// let meses = idade * 12
// let dias = idade * 365
// let horas = idade * 8764

// console.log(meses, dias, horas)

// 4
// let num1 = Number(prompt("Digite um número"))
// let num2 = Number(prompt("Digite outro número"))

// let maior = num1 > num2; 
// let igual = num1 === num2
// let divisivel = (num1 % num2) === 0
// let segundoDividir = (num2 % num1) === 0

// console.log(maior, igual)
// console.log(divisivel, segundoDividir)

//Desafio

// let kelvin = (77 - 32) * (5/9) + 273.15 // fahrenheit para kelvin
// let fahrenheit = (80) * (9/5) + 32 // celsius para fahrenheit
// let kelvinFah = (30) * (9/5) + 32 
// let kf =  (30) + 273.15

// console.log(kelvin+"K")
// console.log(fahrenheit+"F")
// console.log(kelvinFah+"F")
// console.log(kf+"K")

// 2
// let quiloWatt = 280
// let consumo = 280 * 0.05
// let resultadoFinal = (consumo * 85) / 100

// console.log(resultadoFinal)

3
// lb pra kg
// let libra = 20
// let converterKg = 2.205
// console.log(20+"lb", "equivalem a", libra / converterKg+"kg") 

// oz pra kg
//  let oz = 10.5
//  let converterKg = 3.527
// console.log(10.5+"oz", "equivalem a", oz / converterKg+"kg") 

// milha para metro
// let milha = 100
// let converterMetro =  1609
// console.log(100+"mi", "equivalem a", milha * converterMetro+"m")

// pés para metro
// let pes = 50
// let converterPes = 3.281
// console.log(50+"ft", "equivalem a", pes / converterPes+"m")

// galão para litro
// let galao = 103.56
// let converterLitro = 3.785
// console.log(103.56+"gal", "equivalem a", galao * converterLitro+"L")

// xicara para litro 
// let xic = 450
// let converterxic = 0.24
// console.log(450+"xic", "equivale a", xic * converterxic+"L")

// letra G
//lb pra kg
// let libra = Number(prompt("Digite o valor em Libras"))
// let converterKg = 2.205
// console.log(20+"lb", "equivalem a", libra / converterKg+"kg") 