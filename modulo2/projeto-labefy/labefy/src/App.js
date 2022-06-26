import './App.css';
import React, { Component } from 'react'
import CriarPlayList from './Components/CriarPlayList';
import MostrarPlayList from './Components/MostrarPlayList'
import Detalhes from './Components/Detalhes';
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
`
const Header = styled.div`
  background-image: linear-gradient(to right, #2cd4d9, #5333ed );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  height: 66px;
  p {
    font-style: italic;
    font-weight: 100 ;
  }
`
const AreaInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`
class App extends Component {
  state = {
    telaAtual: "criar",
    idPlayList: ''
  }

  detalhesPLayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
    axios.get(url,{
        headers: {
            Authorization: "carlos-sousa-ailton"
        }
    }).then((res)=>{
     this.setState({detalhes: res.data.result.tracks})
        console.log(this.state.detalhes)
    }).catch((err)=>{
    })
}

  mudartela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <CriarPlayList
          irParaListaPlayList={this.irParaLista}
        />
      case "mostrar":
        return <MostrarPlayList
          voltarParaCriarPlayList={this.irParaCriar}
          irParaTelaDetalhe={this.irParaDetalhe}
          idPlayList={this.idPlayList}
        />
      case "detalhe":
        return <Detalhes DadosDetalhes={()=>this.detalhesPLayList()} idPlayList={this.state.idPlayList}/>
    }
  }

  irParaCriar = () => {
    this.setState({
      telaAtual: "criar"
    })
  }
  irParaLista = () => {
    this.setState({
      telaAtual: "mostrar"
    })
  }
  irParaDetalhe = (id) => {
    this.setState({
      telaAtual: "detalhe",
      idPlayList: id
    })
  }
  render() {
    return (
      <div>
      <Container>
        <Header>
          <h1>Labefy</h1>
          <p>Cria sua playlist e adicione suas músicas</p>
        </Header>
        <AreaInput>
        {this.mudartela()}
        </AreaInput>
      </Container>
      </div>
    )
  }
}


export default App;
