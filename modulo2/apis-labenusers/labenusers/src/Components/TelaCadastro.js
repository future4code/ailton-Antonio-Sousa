import axios from 'axios'
import React, { Component } from 'react'

export default class TelaCadastro extends Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome:event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email:event.target.value})
    }

    fazercadastro = () => {
       const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
       const body = {
        name: this.state.nome,
        email: this.state.email
       }

       axios.post(url, body,{
        headers:{
            Authorization: "carlos-sousa-ailton"
        }
       }).then((res) => {
        alert("Usuário cadastrado")
        this.setState({nome: "", email: ""})
       }).catch((err)=> {
        alert("Erro ao cadastrar", err.response.data.message)
       })

       
    }

  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>Ir para lista</button>
        <p>TelaCadastro</p>
        <input 
        placeholder={'Nome'}
        value={this.state.nome}
        onChange={this.handleNome}
        />
        <input 
        placeholder={'Email'}
        value={this.state.email}
        onChange={this.handleEmail}
        />
        <button onClick={this.fazercadastro}>Fazer cadastro</button>
      </div>
    )
  }
}
