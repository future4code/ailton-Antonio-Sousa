import React, { Component } from 'react'
import TelaCadastro from './Components/TelaCadastro'
import TelaListaUsuario from './Components/TelaListaUsuario'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
`
const AreaUsuario = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 600px;
    height: 300px;
    box-shadow: 0px 0px 16px darkgray;
    gap: 20px;
    input {
        width: 100%;
        height: 14px;
  }
`
class App extends React.Component {
  state = {
    TelaAtual: 'cadastro'
  }

 escolheTela = () => {
 switch(this.state.TelaAtual) {
  case "cadastro":
    return <TelaCadastro irParaLista={this.irParaLista}/>
   
  case "lista":
    return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/>
  
  default:
    return <p>Erro</p>
 }
}

irParaCadastro = () => {
  this.setState({TelaAtual: "cadastro"})
}

irParaLista = () => {
this.setState({TelaAtual: "lista"}) 
}
  render() {
    return (
      <Container>
        <AreaUsuario>
         {this.escolheTela()}
        </AreaUsuario>
      </Container>
    )
  }
}



export default App;

