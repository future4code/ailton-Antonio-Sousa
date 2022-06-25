import React, { Component } from 'react'
import axios from 'axios'

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
     return <div key={index}>
             <p>{item.name}</p>
             <p>{item.artist}</p>
            <audio controls="controls" src={item.url}></audio>
           </div>
   })
    return (
      <div>
        {ListaTracks}
        <input placeholder='nome' value={this.state.nome} onChange={this.onChangeNome} />
        <input  placeholder='Artista'  value={this.state.artista} onChange={this.onChangeArtista}/>
        <input  placeholder='url'  value={this.state.url} onChange={this.onChangeUrl}/>
        <button onClick={()=> this.addPlaylist()}>ADD playlist</button>
      </div>
    )
  }
}
