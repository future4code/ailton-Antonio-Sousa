import axios from 'axios'
import React, { Component } from 'react'
import MostrarPlayList from './MostrarPlayList'
import styled from 'styled-components'


const AreaCenter = styled.div`
 margin: 0 auto;
 width: 400px;
 height: 200px;
 padding: 4px;
box-shadow: 0px 0px 16px #5333ed;
 input {
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  width: 100%;
  padding: 2px;
  outline: none;
  margin-top: 30px;
 }
 button{
    width: 100%;
    border: none;
    margin-top: 5px;
    padding: 8px;
    cursor: pointer;
    background-color: #2cd4d9;
    :active {
            background-color: #5333ed;
        }
  }
`

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
      <AreaCenter>
        <input 
        placeholder='Nome da playlist'
        value={this.state.nome}
        onChange={this.onChangeInput}
        />
        <button onClick={this.criarUser}>Criar PLaylist</button>
       <button onClick={this.props.irParaListaPlayList}>Mostrar PLaylist</button>
    </AreaCenter>
    )
  }
}
