import React, { Component } from 'react'

export default class Etapa3 extends Component {
  render() {
    return (
      <div>
        <h1>Etapa 3 - informações gerais de ensino</h1>
        <label for="superior">5. Por que você não terminou um curso de graduação</label>
        <input type="text" name="superior"></input>
        <label for="complemento">6.Você fez algum curso complementar?</label>
        <select name="complemento">
                    <option value="nenhum">Nenhum</option>
                    <option value="tecnico">Curso Técnico</option>
                    <option value="ingles">Curso de Inglês</option>
                </select>
      </div>
    )
  }
}
