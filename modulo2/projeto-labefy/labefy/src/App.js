import './App.css';
import React, { Component } from 'react'
import CriarPlayList from './Components/CriarPlayList';
import MostrarPlayList from './Components/MostrarPlayList'
import Detalhes from './Components/Detalhes';

class App extends Component {
  state = {
    telaAtual: "criar"
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
        />
      case "detalhe":
        return <Detalhes/>
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
  irParaDetalhe = () => {
    this.setState({
      telaAtual: "detalhe"
    })
  }
  render() {
    return (
      <div>
        {this.mudartela()}
      </div>

    )
  }
}


export default App;
