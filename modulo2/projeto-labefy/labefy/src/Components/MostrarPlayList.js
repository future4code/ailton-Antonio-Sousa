import React, { Component } from 'react'
import Detalhes from './Detalhes'
import axios from 'axios'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid black;
    padding: 8px;
    width: 300px;
    margin-bottom: 5px;
    :hover {
        background-color: aliceblue;
    }
`

export default class MostrarPlayList extends Component {
    state = {
        playList:[],
        detalhes: []
    }

        componentDidMount = () =>{
            this.pegarPlayList()
        }
    pegarPlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "carlos-sousa-ailton"
            }
        }).then((res)=>{
            this.setState({
                playList: res.data.result.list
            })
           
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    apagarPlayList = (id) => {
        if(window.confirm("Deseja deletar ?")) {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url,{
            headers: {
                Authorization: "carlos-sousa-ailton"
            }
       
        }).then((res)=> {
            console.log(res.data)
            this.pegarPlayList()
        }).catch((err)=>{
            console.log(err.message)
        })
     }else {

     }
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
  render() {
    const Mostrartela = this.state.playList.map((item) => {
        return <Card key={item.id}>
                {item.name}
                <button onClick={()=> this.apagarPlayList(item.id)}>Deletar</button>
                <button onClick={()=>this.detalhesPLayList(item.id)}>Detalhes</button>
            </Card>
    })
    return (
      <div>
        voltar para criar
        {Mostrartela}
        
        <button onClick={this.props.voltarParaCriarPlayList}> criar playlist</button>
        <button onClick={this.props.irParaTelaDetalhe}>Ir para detalhe</button>
      </div>
    )
  }
}
