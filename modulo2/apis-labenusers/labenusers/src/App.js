import React, { Component } from 'react'
import TelaCadastro from './Components/TelaCadastro'
import TelaListaUsuario from './Components/TelaListaUsuario'
import axios from 'axios'
import TelaDetalheUser from './Components/TelaDetalheUser'
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
    box-shadow: 0px 0px 16px darkgray;
    gap: 20px;
    input {
        width: 100%;
        height: 14px;
  }
`
class App extends React.Component {
  state = {
    TelaAtual: 1,
  }

 escolheTela = () => {
 switch(this.state.TelaAtual) {
  case 1:
    return <TelaCadastro/>
    break;
  case 2:
    return <TelaListaUsuario/>
    break;
  default:
    return <p>Final</p>
 }
}
irParaProxima = () => {
  if(this.state.TelaAtual < 2) {
  this.setState({
    TelaAtual: this.state.TelaAtual + 1
  })
}
}
irParaAnterior = () => {
  this.setState({
    TelaAtual: this.state.TelaAtual - 1
  })
}

  render() {
    return (
      <Container>
        <AreaUsuario>
        {this.escolheTela()}
        {this.state.TelaAtual < 2 && <button   onClick={this.irParaProxima}>Próximo</button> }
         <button   onClick={this.irParaAnterior}>voltar</button>
        </AreaUsuario>
      </Container>
    )
  }
}



export default App;

