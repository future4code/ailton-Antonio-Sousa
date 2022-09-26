// describe("Isso é um teste", ()=>{
//     test("Teste", ()=>{
//         console.log("Foi testado !!!")
//     })
// })


describe("Testando Funções", () => {

    test('É par', () => {
        expect(natural(112)).toBe(false)
    })

    test('Deu ceto', () => {
        expect(toUpperCase('Banana')).toBe('BANANA');
    });

    test('Deu certo', () => {
        expect(separarString("DEV")).toEqual(["D", 'E', "V"])
    })
    test("Convertido para inteiro", ()=>{
        expect(inteiro("2000")).toBe(2000)
    })
    test("Quantidade de caracteres", ()=>{
        expect(qtdCaracteres("Farofa")).toBe(6)
    })
    test("Número aleatorio", ()=>{
        expect(Number)
    })
    test("Usuário astrodev",()=>{
    expect.objectContaining('Astrodev')
    })
    test("Média dos alunos", ()=> {
        expect(media([10,4,7,6])).toEqual(7)
    })
    test("idade atual", ()=>{
        expect(idadeAtual(2000)).toBe(22)
    })
    test("Data atual", ()=>{
        expect("26/09/2022")
    })
})




//Exercício 0
const natural = (num: number): boolean => {
    const result = (num % 2) === 1
    return result
}
//Exercício 1
const toUpperCase = (str: string): string => {
    return str.toUpperCase()
}
// Exercício 2
const separarString = (separa: string) => {
    return separa.split("")
}
// Exercício 3
const inteiro = (num1:string):number => {
    return parseInt(num1)
}
//Exercício 4
const qtdCaracteres = (num2:String):number =>{
    return num2.length
}
//Exercício 5
const numAleatorio = ():number =>{
    return Math.floor(Math.random() * 10 + 1)
}
//Exercício 6
interface User {
    id:number,
    user:string,
    age:number
}
const usuario:User[] = [
    {id: 1, user:"Astrodev", age: 10},
    {id: 2, user:"carlos", age: 20}
]

//Exercício 7
function media(numeros:number[]):number {
    
    const length = numeros.length

    let result = numeros.reduce(function(soma, i) {
        return soma + i;
    });
    
   return Math.ceil(result / length)
}
//Exercício 8
const idadeAtual = (idade:number):number => {
    let dateAtual = new Date().getFullYear()

   return dateAtual - idade
}
//Exercício 9

const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}





