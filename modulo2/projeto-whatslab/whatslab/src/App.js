import './App.css';
import { Area } from './componenetes/AreaCenter'
import styled from 'styled-components';
import React from 'react';

const AreaContainer = styled.div`
display: flex;
flex-direction: column;
width: 600px;
height: 400px;
margin: 0 auto;
border: 1px solid black;
`
const Areamid = styled.div`
display: flex;
height: 100%;
border: 1px solid red;
padding: 20px;
`


class App extends React.Component {
  
  render() {

    return (
      <AreaContainer>
        <Areamid>
        </Areamid>
        <Area
          botao="Enviar"
        />

      </AreaContainer>
    )
  }
}

export default App;
