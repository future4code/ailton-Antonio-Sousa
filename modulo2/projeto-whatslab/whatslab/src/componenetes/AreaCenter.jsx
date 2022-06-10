import React, { useState } from 'react';
import styled from 'styled-components';

const Center = styled.div`
width: 100%;
border: 1px solid black;
`
const Mensagem = styled.input`
width: 60%;
`


export const Area = (props) => {
    
    const Clicar = () => {
        alert("Ola")
    }

    return (

        <Center>
            <input type="text" placeholder='Usuario'></input>
            <Mensagem type="text" placeholder='Mensagem'></Mensagem>
            <button onClick={Clicar} >{props.botao}</button>
        </Center>

    )
}

