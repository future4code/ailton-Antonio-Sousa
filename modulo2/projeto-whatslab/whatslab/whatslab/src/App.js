import React from 'react'
import Area from './componentes/componentesArea'
import styled from 'styled-components'

const AreaContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 600px;
height: 500px;

`
const AreaCenter = styled.div`
display: flex;
flex-direction: column;
height: 94%;
border: 2px solid #1FEB0C;
`
const AreaCenterFlex = styled.div`
display: flex;
`
const Titulo = styled.h1`
  text-align: center;
  color: #1FEB0C ;
`
const Paragra = styled.p`
background-color: #999;
border-radius: 10px;
padding: 10px;
color: white;
`
class App extends React.Component {
  state =  {
    valorInputUsuario: '',
    valorInputMensagem: '',
    Mensagens: []
  }
  onChangeUsuario = (event) => {
    this.setState ({
        valorInputUsuario: event.target.value,
    })
    console.log(event.target.value)
  }
  onChangeMensagem = (event) => {
    this.setState ({
      valorInputMensagem: event.target.value,
    })
    console.log(event.target.value)
  }
  AoEnviar = () => { // clone do state mensagens
    const ArrayNovo = [...this.state.Mensagens]
    ArrayNovo.push({
      Usuario: this.state.valorInputUsuario,
      Mensagem: this.state.valorInputMensagem
    })
    this.setState ({
      Mensagens: ArrayNovo,
      valorInputUsuario: '',
      valorInputMensagem: ''
    })
  }
  render() {
    const novoArray = this.state.Mensagens.map((item) => {
      return (
      <AreaCenterFlex>
          <Paragra>{item.Usuario} :</Paragra>
          <Paragra>{item.Mensagem}</Paragra>
      </AreaCenterFlex>
      )
    })
    return (
      <AreaContainer>
      <Titulo>ZAP ZAP</Titulo>
      <AreaCenter>
       {novoArray}
      </AreaCenter>
      <Area onChangeUsuario={this.onChangeUsuario} valorInputUsuario={this.state.valorInputUsuario}
       onChangeMensagem={this.onChangeMensagem} valorInputMensagem={this.state.valorInputMensagem} 
       AoEnviar={this.AoEnviar}
       />
      </AreaContainer>
    )
  }
}

export default App;
