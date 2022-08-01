import React from 'react'
import * as C from '../pages/StyledGlobal'

export const Educacao = (props) => {
    return (
        <C.AreaContainer>
            <div>
                <h1>Etapa 2 - informações do ensino superior</h1>
            </div>
            <div>
                <label>5 - Qual Curso ?  <input type="text" /> </label>
                <label>6 - Qual unidade de ensino ?  <input type="text" /> </label>

            </div>
            <button onClick={()=> props.trocarTela("superior")}>Próximo</button>
        </C.AreaContainer>
    )
}
