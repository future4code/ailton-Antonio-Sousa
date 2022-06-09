import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import imgDois from '../src/img/fundoDois.jpg'
import iconPessoa from './img/iconpessoa.webp'
import imgtres from './img/fundotres.jpg'
import iconPessoaDois from './img/iconpessoadois.webp'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
         <Post
          nomeUsuario={'Ana Clara'}
          fotoUsuario={iconPessoa}
          fotoPost={imgDois}
        />
         <Post
          nomeUsuario={'Lara Croft'}
          fotoUsuario={iconPessoaDois}
          fotoPost={imgtres}
        />
      </MainContainer>
    );
  }
}

export default App;
