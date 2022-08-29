import React from 'react'
import * as C from './StyledGlobal'

export const InforGerais = (props) => {
  return (
    <C.AreaContainer>
    <div>
        <h1>Etapa 3 - informações gerais de ensino</h1>
    </div>
    <div>
        <label>7 - Por que você não terminou um curso de graduação ? <input type="text" /> </label>
        <label>8 - Você fez algum curso complementar ? 
                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>         
        </label>
    <button onClick={()=> props.trocarTela("finalizado")}>Finilizar</button>
    </div>
</C.AreaContainer >
  )
}
