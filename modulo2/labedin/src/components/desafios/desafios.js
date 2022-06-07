import React from 'react';
import styled from 'styled-components'

const Desa = styled.div`
   align-items: center;
   text-align: center;
   padding: 7px;
   border: 1px solid black;
   margin-bottom: 10px;
`
const Title = styled.h1`
font-size: 1.5rem;
`
const Link = styled.a`
outline: none;
text-decoration: none;
cursor: pointer;
color: black;
&:hover {
    color: blue;
}
`


function Desafio(props) {
    return (
        <Desa>
            <Title>{props.texto}</Title>
            <Link href={props.textoDois}>Loading page- projeto feito em grupo</Link>
        </Desa>
    )
}
export default Desafio