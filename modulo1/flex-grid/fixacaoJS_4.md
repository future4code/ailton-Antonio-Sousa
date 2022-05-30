```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
    let contator = 0;

  for (const numero of arrayDeNumeros) {
        if(numero === numeroEscolhido){
            contator++
        }  
  }
  if(contator === 0) {
    return "Número não encontrado"
  }
  return `O número ${numeroEscolhido} aparece ${contator}x`
}
console.log(contaOcorrencias([1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5], 4))
```