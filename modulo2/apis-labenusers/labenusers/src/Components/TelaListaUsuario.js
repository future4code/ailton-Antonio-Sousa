import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Card = styled.div`
text-align: center;
border: 1px solid black;
border-radius: 5px;
width: 100%;
text-transform: uppercase;
padding: 4px;
`

export default class TelaListaUsuario extends Component {
    state = {
        users:[]
    }

componentDidMount () {
    this.pegarUsuario()
}

    pegarUsuario = () => {
    const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url,{
            headers:{
                Authorization: "carlos-sousa-ailton"
            }
        }).then((res)=>{
            this.setState({users: res.data})
        }).catch((err)=> {
            alert("Erro, tente novamente")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url,{
            headers: {
            Authorization: "carlos-sousa-ailton"
            }
        }).then((res) => {
            console.log(res)
           this.pegarUsuario()
        }).catch((err)=> {
            alert("tente novamente")
        })
    }
  render() {
    const Mostrartela = this.state.users.map((item) => {
        return <Card key={item.id}>
                {item.name}
                <button onClick={() => this.deletarUsuario(item.id)}>Remover Usuário</button>
            </Card>
    })
    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        <p>TelaListaUsuario</p>
        {Mostrartela}
      </div>
    )
  }
}
