import axios from 'axios'
import React, { Component } from 'react'
import MostrarPlayList from './MostrarPlayList'

export default class CriarPlayList extends Component {

  state = {
    nome: "",
  }

    criarUser = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = {
        name: this.state.nome
      }
      axios.post(url, body,{
        headers: {
          Authorization: "carlos-sousa-ailton"
        }
      }).then((res) =>{
        alert("PlayList criada")
        this.setState({
          nome: ""
        })
      }).catch((err)=>{
        console.log(err.response.data.message)
      })


        
        
    }
    

  onChangeInput = (event) => {
    this.setState({
      nome: event.target.value
    })
    console.log(this.state.nome)
  }
  render() {
    return (
      <div>
        <input 
        placeholder='Nome da playlist'
        value={this.state.nome}
        onChange={this.onChangeInput}
        />
        <button onClick={this.criarUser}>Criar PLaylist</button>
       <button onClick={this.props.irParaListaPlayList}>Mostrar PLaylist</button>
    </div>
    )
  }
}
