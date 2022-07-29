import './App.css';
import React from 'react';
import { Chart } from './pages/Chart';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 500px;
`

function App() {
  return (
    <Container>
      <Chart />
    </Container>
  );
}

export default App;
