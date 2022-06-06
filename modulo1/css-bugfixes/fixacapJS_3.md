```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
    let total = ex * 1 + p1 * 2 + p2 * 3
    let peso = 1+2+3
    let soma = total / peso   
   if(soma >= 9) {
       return "A"
   } else if (soma < 9 && soma >= 7.5){
       return "B"
   } else if (soma < 7.5 && soma >= 6){
       return "C"
   } else {
       return "D"
   }
 
}
```