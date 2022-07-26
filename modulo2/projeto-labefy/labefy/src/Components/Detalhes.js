import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  background-image: linear-gradient(to right, #2cd4d9, #5333ed );
display: flex;
flex-direction: column;
justify-content: center;
background-color: #999;
min-height: 366px;
width: 700px;
padding: 4px;
`
const AreaMusic = styled.div`
display: flex;
flex: 1;
justify-content: space-between;
align-items: center;
margin-top: 5px;
margin-bottom: 5px;
`
const AreaInput = styled.div`
text-align: center;
flex: 1;
margin: 0 auto;
width: 400px;

input {
  margin-bottom: 10px;
  width: 100%;
  height: 36px;
  border-radius: 30px;
  outline: none;
  border: none;
  padding:0 10px; 
}
button {
  background-color: #2cd4d9;
  text-align: center;
  width: 80%;
  height: 36px;
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
}
`
export default class Detalhes extends Component {
  state = {
    nome: "",
    artista: "",
    url: "",
    addLista: [],
    musicas: {}

  }
  componentDidMount = () => {
    this.mostrarPLayList()
  }
  componentDidUpdate = (prevProps, prevStatus) =>{
    this.mostrarPLayList(prevStatus)
  }

  addPlaylist = () => {
    console.log(this.props.idPlayList)
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`
    const body = {
    name:this.state.nome,
    artist:this.state.artista,
    url: this.state.url
    }
    axios.post(url, body, {
      headers: {
        Authorization: "carlos-sousa-ailton"
      }
    }).then((res) =>{
      const NovaPlayList = [...this.state.addLista, this.state.musicas]
      this.setState({
        addLista: NovaPlayList
      })
      console.log(res)
    }).catch((err) => {
      console.log(err.response)
    })
 
}

  mostrarPLayList = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`
     axios.get(url, {
      headers: {
        Authorization: "carlos-sousa-ailton"
      }
     }).then((res) => {
        this.setState({
          addLista:res.data.result.tracks,
        })
        console.log(res.data.result.tracks)
     }).catch((err)=> {
      console.log(err)
     })
  }

  removerTracks = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId`
    axios.delete(url, {
      headers: {
        Authorization: "carlos-sousa-ailton"
      }
    }).then((res) => {
      console.log(res.data)
      this.mostrarPLayList()
    }).catch((err) => {
      console.log(err)
    })
  }
  onChangeNome = (event) => {
    this.setState({
      nome:event.target.value,
    })
  }
  onChangeArtista = (event) => {
    this.setState({
      artista:event.target.value
    })
  }
  onChangeUrl = (event) => {
    this.setState({
      url:event.target.value
    })
  }

  render() {
   const ListaTracks = this.state.addLista.map((item, index) => {
     return <AreaMusic key={index}>
             <p>{item.name}</p>
             <p>{item.artist}</p>
             <button>Apagar musica</button>
            <audio controls="controls" src={item.url}></audio>
           </AreaMusic>
   })
    return (
      <Container>
        {ListaTracks}
        <AreaInput>
        <input placeholder='nome' value={this.state.nome} onChange={this.onChangeNome} />
        <input  placeholder='Artista'  value={this.state.artista} onChange={this.onChangeArtista}/>
        <input  placeholder='url'  value={this.state.url} onChange={this.onChangeUrl}/>
        <button onClick={()=> this.addPlaylist()}>Adicionar</button>
        </AreaInput>
       
      </Container>
    )
  }
}
