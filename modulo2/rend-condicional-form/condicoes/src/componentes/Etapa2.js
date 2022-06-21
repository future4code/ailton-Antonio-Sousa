import React, { Component } from 'react'

export default class Etapa2 extends Component {
  render() {
    return (
      <div>
        <h1>Etapa 2 - informaçoes do ensino superior</h1>
        <label for="curso">5. Qual curso ?</label>
        <input type="text" name="curso"></input>
        <label for="ensino">5. Qual a unidade de ensino ?</label>
        <input type="text" name="ensino"></input>
      </div>
    )
  }
}
