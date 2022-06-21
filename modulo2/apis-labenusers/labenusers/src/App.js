import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

`
const AreaUsuario = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 600px;
    height: 300px;
    box-shadow: 0px 0px 16px darkgray;
    gap: 20px;
    input {
        width: 50%;
        height: 14px;
    }
`
class App extends Component {
  state = {
    Email: '',
    Name: '',
    users: []
  }
  componentDidMount (){ this.getUsers()}
   addUsers = () => {
    const body = {
      Name:this.state.Name,
      Email:this.state.Email
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
    body, {
      headers:{
        Authorization: "carlos-sousa-ailton"
      }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

  getUsers = () => {
      axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
      {
        headers: {
          Authorization: "carlos-sousa-ailton"
      }
    }).then((response) => {
      this.setState({users: response.data})
      
      console.log(response)

    }).catch((error)=> {
      console.log(error.message)
    })
  }  

  onChangeEmail = (event) => {
    this.setState({
      Email: event.target.value
    })
  }
  onChangeName = (event) => {
    this.setState({
      Name: event.target.value
    })
  }
  render() {
  const Mostrartela = this.state.users?.map((item) => {
    return <div key={item.id}>
      <p>{item.Name}</p>
    </div>
  })
    return (
     <Container>
      <AreaUsuario>
                <label>
                Digite seu email:
                    <input 
                    value={this.state.Email}
                    onChange={this.onChangeEmail}
                    />
                Digite seu Nome: 
                    <input
                    value={this.state.Name}
                    onChange={this.onChangeName}
                    />
                </label>
                    {Mostrartela}
                    <button onClick={this.addUsers}>Criar Usuário</button>
            </AreaUsuario>
     </Container>
    )
  }
}
export default App;

