import React from 'react';
import * as C from './StyledButton'

function ImagemButton(props) {
    return (
        <C.ImageButtonContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </C.ImageButtonContainer>

    )
}

export default ImagemButton;