import React, { useState } from "react";
import styled from "styled-components";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import salvoBranco from '../../img/salvar-instagram.png'
import salvoPreto from '../../img/salvarpreto.png'
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import { IconeSalvo } from "../iconeSalvo/IconeSalvo";

const AreaTotal = styled.div`
`

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
  height: 290px;
`;

function Post(props) {
  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [salvo, setSalvo] = useState(false)

  const onClickCurtida = () => {
    setCurtido(!curtido)
    if (curtido === true) {
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const aoEnviarComentario = () => {
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  };
  const onClickSalvo = () => {
    setSalvo(!salvo)
  }

  let iconeSalvo;

  if (salvo === true) {
    iconeSalvo = salvoPreto
  } else {
    iconeSalvo = salvoBranco
  }

  let iconeCurtida;

  if (curtido === true) {
    iconeCurtida = iconeCoracaoPreto;
  } else {
    iconeCurtida = iconeCoracaoBranco;
  }

  let componenteComentario;

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} setCom={setComentando} valor={comentando} />;
  }

  return (
    <AreaTotal>
      <PostContainer>

        <PostHeader>
          <UserPhoto src={props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{props.nomeUsuario}</p>
        </PostHeader>
        

        <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={onClickCurtida}
            valorContador={numeroCurtidas}
          />
          <IconeSalvo
            icone={iconeSalvo}
            onClickSalvo={onClickSalvo}
          />
          <IconeComContador
            icone={iconeComentario}
            onClickIcone={onClickComentario}
            valorContador={numeroComentarios}
          />

        </PostFooter>
        {componenteComentario}
      </PostContainer>  
         
    </AreaTotal>
  );
}

export default Post;
