function criarArrayNomesAnimais() {
  const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
  ]
const retornaNomes = animais.map((item) => {
  return item.nome
})
return retornaNomes
}
console.log(criarArrayNomesAnimais())






