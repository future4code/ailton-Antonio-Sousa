import React, { Component } from 'react'
import styled from 'styled-components'


class Etapa1 extends Component {
    render() {
        return (
            <div>
                <h1>Etapa 1 - Dados gerais</h1>
                <label for="nome">1. Qual o seu nome</label>
                <input type="text" name="nome"></input>
                <label for="idade">2. Qual a sua idade ?</label>
                <input type="text" name="idade"></input>
                <label for="email">3. Qual o seu email</label>
                <input type="text" name="email"></input>
                <label for="escola">4. Qual sua escolaridade</label>
                <select name="escola">
                    <option value="medioIn">Ensino médio incompleto</option>
                    <option value="medioC">Ensino médio completo</option>
                    <option value="superiorIn">Ensino superior incompleto</option>
                    <option value="superiorC">Ensino superior completo</option>
                </select>
            </div>
        )
    }
}
export default Etapa1;
