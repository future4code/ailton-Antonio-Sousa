//Exercício 3

let tarefaOne = process.argv[2]

const Lista = [
    "Comprar macarrão",
    "Comprar pão",
]

const novaLista = [...Lista, tarefaOne]

console.log(novaLista)