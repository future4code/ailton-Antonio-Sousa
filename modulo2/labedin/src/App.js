import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import img from './components/img/eufoto.jpg';
import email from './components/img/o-email.png';
import local from './components/img/localizador-de-mapa.png';
import seta from './components/img/seta-para-baixo.png';
import git from './components/img/github.png'
import CardPequeno from './components/CardPequeno.js/CardPequeno';

import styled from 'styled-components';
import Desafio from './components/desafios/desafios';

const NomeDois = styled.h2`
color: black;
`
const AreaApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`




function App() {
  return (
    <AreaApp>
      <div className="page-section-container">
        <NomeDois>Dados Pessoas</NomeDois>
        <CardGrande
          imagem={img}
          nome="Carlos Sousa"
          descricao="Oi, eu sou o Carlos e sou estudante de programação na Labenu"
        />

        <ImagemButton
          imagem={seta}
          texto="Ver mais"
        />
      </div>
      <div className='page-section-container'>
        <CardPequeno
          image={email}
          texto="carlosramos10k@gmail.com"
        />
        <CardPequeno
          image={local}
          texto="Endereço Rua Labenu Quadra: Labe Rua: Nu"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem={git}
          nome="Desenvolvedor/Quase Junior"
          descricao="Estudando programação"
        />
      </div>
      <div className='page-section-container'>
        <Desafio
          texto="Projetos"
          textoDois="https://hurried-rock.surge.sh/index.html"
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </AreaApp>
  );
}

export default App;
