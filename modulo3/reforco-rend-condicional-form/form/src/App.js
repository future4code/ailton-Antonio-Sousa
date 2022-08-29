import './App.css';
import { DadosGerais } from './pages/DadosGerais';
import { Educacao } from './pages/Educacao'
import { InforGerais } from './pages/InforGerais';
import { Finalizado } from './pages/Finalizado';
import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 200px
  }
`

function App() {

  const [telaAtual, setTelaAtual] = useState("home")
  const [selecao, setSelecao] = useState("")

  const renderizaTelaAtual = () => {
    switch(telaAtual) {
      case "home":
        return <DadosGerais trocarTela={trocarTela} onChangeSelecao={onChangeSelecao} selecao={selecao}/>
        break;
      case "educacao":
        return <Educacao trocarTela={trocarTela} />
        break;
      case "InforGerais":
        return <InforGerais trocarTela={trocarTela}/>
      case "finalizado":
        return <Finalizado />
    }
  }

  const onChangeSelecao = (event) => {
    setSelecao(event.target.value)
    console.log("Select"+event.target.value )
}

 const trocarTela = (tela) => {
  console.log(selecao)
  if(selecao === "Ensino superior incompleto" || "Ensino superior completo"){
    setTelaAtual("educacao")
  } else {
    setTelaAtual("InforGerais")
  }
 }

  return (
    <Container>
      {renderizaTelaAtual()}    

    </Container>
  );
}

export default App;
