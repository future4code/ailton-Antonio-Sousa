import React from 'react';
import * as C from './Styled.Card'

function CardGrande(props) {
    return (
        <C.BigcardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </C.BigcardContainer>
    )
}

export default CardGrande;