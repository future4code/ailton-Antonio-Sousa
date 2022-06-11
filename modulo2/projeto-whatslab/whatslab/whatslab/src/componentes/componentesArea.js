import React from "react";
import styled from 'styled-components'

const Botao = styled.button`
color: white;
background-color:  #1FEB0C;
border: none;
height: 22px;
&:hover {
    opacity: 0.5;
    transition: all 0.5s;
}
`
const AreaInput = styled.input`
width: 18vw;
border: none;
outline: none;
border-bottom: 2px solid black;
margin: 0px 10px;
`
class Area extends React.Component {
    render () {
        return (
            <div>
           <input placeholder="Usuário" value={this.props.valorInputUsuario} onChange={this.props.onChangeUsuario}></input>
           <AreaInput placeholder="Mensagem" value={this.props.valorInputMensagem} onChange={this.props.onChangeMensagem}></AreaInput>
           <Botao onClick={this.props.AoEnviar}>Enviar</Botao>
           </div>
        )
    }
}
export default Area;
