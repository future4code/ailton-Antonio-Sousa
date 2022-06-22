import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TelaDetalheUser from './TelaDetalheUser'

const Card = styled.div`
display: flex;
justify-content: space-between;
text-align: center;
border: 1px solid black;
border-radius: 5px;
width: 100%;
text-transform: uppercase;
padding: 4px;
`
const Tela = styled.div`
 button {
    height: 100%;
 }
`
export default class TelaListaUsuario extends Component {
    state = {
        users: [],
        infor: {},
        mostrar: false
    }

    componentDidMount() {
        this.pegarUsuario()
    }

    pegarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "carlos-sousa-ailton"
            }
        }).then((res) => {
            this.setState({ users: res.data })
        }).catch((err) => {
            alert("Erro, tente novamente")
        })
    }


    deletarUsuario = (id) => {
        if (window.confirm('Deletar ?')) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
            axios.delete(url, {
                headers: {
                    Authorization: "carlos-sousa-ailton"
                }
            }).then((res) => {
                console.log(res)
                this.pegarUsuario()
            }).catch((err) => {
                alert("tente novamente")
            })
        } else {

        }
    }

    detalheUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.get(url, {
            headers: {
                Authorization: "carlos-sousa-ailton"
            }
        }).then((res) => {
            this.setState({ infor: res.data })
            this.setState({
                mostrar: true
            })
            // console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const Mostrartela = this.state.users.map((item) => {
            return <Card key={item.id}>
                <p>{item.name}</p>
                <Tela>
                <button onClick={() => this.deletarUsuario(item.id)}>Remover Usuário</button>
                <button onClick={() => this.detalheUser(item.id)}>Infor</button>
                </Tela>
                   </Card>
        })

        return (
            <>
                {this.state.mostrar ? <TelaDetalheUser  infor={this.state.infor}/>:
                <div>
                    <p>TelaListaUsuario</p>
                    {Mostrartela}
                  
                </div>
                }
            </>

        )
    }
}
