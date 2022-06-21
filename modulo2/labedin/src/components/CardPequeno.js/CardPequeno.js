import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const Teste = styled.div`
  display: flex;
   align-items: center;
   padding: 7px;
   border: 1px solid black;
   margin-bottom: 10px;
`
function CardPequeno(props) {
    return (
        <Teste>
            <img src={props.image} />
            <p>{props.texto}</p>
        </Teste>
    )

}
export default CardPequeno