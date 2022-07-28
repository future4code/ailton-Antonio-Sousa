import React from 'react';
import './App.css'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';
import img from './img/seta.png'
import email from './img/email.png'
import local from './img/localizacao.png'

const AreaApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSection  = styled.div`
    width: 40vw;
  margin: 10px 0;
  h3 {
  text-align: center;
  margin-bottom: 20px;
}
`
const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <AreaApp>
      <PageSection>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem="https://picsum.photos/id/237/80/80" 
          nome="Carlos Sousa" 
          descricao="Oi, eu sou o Carlos. Sou estudante da Labenu. Adoro programar durante a semana e resolver varios problemas."
        />
        
        <ImagemButton 
          imagem={img}
          texto="Ver mais"
        />
      </PageSection>
      
        <PageSection>
          <CardPequeno
          email={email}
          tituloEmail="Email"  
          spanEmail="carlosramos10k@gmail.com"
          local={local}
          tituloLocal="Local"
          spanLocal="SLZ Maranhão"
          />
        </PageSection>

      <PageSection>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https:/picsum.photos/40/40" 
          nome="Thiago auto peças" 
          descricao="Loja focada em vendas de peças automotivas." 
        />
      </PageSection>

      <PageSection>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSection>
    </AreaApp>
  );
}

export default App;
