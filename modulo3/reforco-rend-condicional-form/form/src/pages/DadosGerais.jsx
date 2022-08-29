import React, { useState } from 'react'
import * as C from '../pages/StyledGlobal'
import { Educacao } from './Educacao'
import { InforGerais } from './InforGerais'

export const DadosGerais = (props) => {
    const [name, setName] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")
    // const [selecao, setSelecao] = useState("")


    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeIdade = (event) => {
        setIdade(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
 

    const fazerLogin = (event) => {
        event.preventDefault()
        props.trocarTela()
    }

    return (
        <C.AreaContainer>
            <div>
                <h1>Etapa 1 - DadosGerais </h1>
            </div>
            <div>
                <form onSubmit={fazerLogin}>

                <label htmlFor="name">1 - QuaL o seu nome ? </label>
                <input type="text" id="name" required value={name} onChange={onChangeName} />

                <label htmlFor="age">2 - QuaL o sua idade ? </label>
                <input type="number" id="age" required onChange={onChangeIdade}/>

                <label htmlFor='email'>3 - QuaL o seu Email ? </label>
                <input type="email" name="email" onChange={onChangeEmail}/>

                <label>4 - QuaL o sua escolaridade
                    <select value={props.selecao} onChange={props.onChangeSelecao}>
                        <option>Ensino Médio incompleto</option>
                        <option>Ensino Médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>
                </label>
                <button>Proximo</button>
                {/* {selecao === "Ensino superior incompleto" && "Ensino superior completo" ? <button onClick={() => props.trocarTela("educacao")}>Próximo</button> :
                    <button onClick={() => props.trocarTela("informacoes")}>Próximo select</button>} */}
                    {/* <button>{selecao === "Ensino superior incompleto" ? <Educacao/> : <InforGerais/>}Proximo</button> */}          
                 </form>
            </div>
        </C.AreaContainer >
    )
}
