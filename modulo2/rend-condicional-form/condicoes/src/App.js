import React, { Component } from 'react'
import Etapa1 from './componentes/Etapa1'
import Etapa2 from './componentes/Etapa2'
import Etapa3 from './componentes/Etapa3'
import FInal from './componentes/FInal'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
max-width: 800px;
height: 50vh;
margin: 0 auto;
label{
  display: block;
  padding: 10px;
}
select {
  display: inline-block;
  text-align: center;
}
`
const AreaCenter = styled.div`
display: flex;
align-items: center;
flex-direction: column;
text-align: center;
border-radius: 28px;
box-shadow: 0 0 16px 4px gray;
button {
  margin-top: 10px;
}
input {
  outline: none;
  border: none;
  padding: 2px;
  border-bottom: 1px solid black;
  width: 300px;
}
`
class App extends Component {
  state = {
    etapa: 1,
  }
  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1  />
        break;
      case 2:
        return <Etapa2 />
        break;
      case 3:
        return <Etapa3 />
        break;
      case 4:
        return <FInal />
    }
  }
  irParaProximEtapa = () => {
  this.setState({
    etapa: this.state.etapa+1
  })
  }
  render() {
    return (
      <Container>
        <AreaCenter>
          {this.renderizarEtapa()}
          <button onClick={this.irParaProximEtapa}>Próxima Etapa</button>
        </AreaCenter>
      </Container>
    )
  }
}
export default App;


