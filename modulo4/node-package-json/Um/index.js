//a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// 
//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
const nome = process.argv[2]
const idade = process.argv[3]
const red =  '\u001b[31m';
const green = "\x1b[32m"

const res = `Seu nome é ${nome}! Você tem ${idade} anos`

if(nome === undefined  ||  idade === undefined){
    console.log("Preencha Todos Campos")
} else {
    console.log(`${green} ${res}`)
}

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
const resDois = `Seu nome é ${process.argv[2]}! 
Você tem ${process.argv[3]} anos. Em sete anos você terá ${+process.argv[3] + 7}`
console.log(resDois)





