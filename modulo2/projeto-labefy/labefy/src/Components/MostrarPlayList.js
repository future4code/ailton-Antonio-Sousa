import React, { Component } from 'react'
import Detalhes from './Detalhes'
import axios from 'axios'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 16px #5333ed;
    padding: 8px;
    width: 400px;
    margin-bottom: 5px;
    :hover {
        background-color: aliceblue;
    }
    button {
        width: 100px;
        padding: 5px;
        border: none;
        background-color: #2cd4d9;
        margin-right: 4px;
        cursor: pointer;
        :active {
            background-color: #5333ed;
        }
    }
`
const ButtonSolo = styled.div`
    text-align: center;
    margin-bottom: 6px;
    button {
        width: 100%;
        background-color: #2cd4d9;
        outline: none;
        border: none;
        padding: 6px;
        font-size: 16px;
    }
`
export default class MostrarPlayList extends Component {
    state = {
        playList: [],
        detalhes: [],
    }

    componentDidMount = () => {
        this.pegarPlayList()
    }
    pegarPlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "carlos-sousa-ailton"
            }
        }).then((res) => {
            this.setState({
                playList: res.data.result.list
            })

        }).catch((err) => {
            console.log(err.response)
        })
    }

    apagarPlayList = (id) => {
        if (window.confirm("Deseja deletar ?")) {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

            axios.delete(url, {
                headers: {
                    Authorization: "carlos-sousa-ailton"
                }

            }).then((res) => {
                console.log(res.data)
                this.pegarPlayList()
            }).catch((err) => {
                console.log(err.message)
            })
        } else {

        }
    }


    render() {
        const Mostrartela = this.state.playList.map((item) => {
            return <Card key={item.id}>
                <p>{item.name}</p>
                <div>
                    <button onClick={() => this.apagarPlayList(item.id)}>Deletar</button>
                    <button onClick={() => this.props.irParaTelaDetalhe(item.id)}>Detalhes</button>
                </div>
            </Card>
        })
        return (
            <div>
                <ButtonSolo>
                <button onClick={this.props.voltarParaCriarPlayList}> Voltar</button>
                </ButtonSolo>
                
                {Mostrartela}
            </div>
        )
    }
}
