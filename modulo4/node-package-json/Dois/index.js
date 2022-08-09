// Exercício 2

let resultado;

let operador = "div"

let numberOne = process.argv[2]
let numberTwo = process.argv[3]

if(process.argv.length <= 5) {
    console.log("Digite todos os númeors")
} else {
    switch (operador) {
        case 'somar':
            resultado = numberOne + numberTwo
            console.log(`${numberOne} + ${numberTwo} = ${resultado}`);
            break
        case 'subt':
            resultado = numberOne - numberTwo
            console.log(`${numberOne} - ${numberTwo} = ${resultado}`);
            break
        case "mult":
            resultado = numberOne * numberTwo
            console.log(`${numberOne} * ${numberTwo} = ${resultado}`)
        case "div":
             resultado = numberOne / numberTwo
             console.log(`${numberOne} / ${numberTwo} = ${resultado}`)
    }
}

