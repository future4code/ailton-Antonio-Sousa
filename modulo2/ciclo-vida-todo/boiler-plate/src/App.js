import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Texto da  primeira tarefa',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now(),
          texto: 'Segunda tarefa',
          completa: true
        }
      ],
      inputValue: '',
      filtro: 'completa'
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({
     inputValue: event.target.value
    })
    console.log(event.target.value)
  }

  criaTarefa = (event) => {
    this.setState({
      inputValue: event.target.value
    })
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: ''
    }
    const novaListaTarefas = [...this.state.tarefas]
    novaListaTarefas.push(novaTarefa)
    this.setState({
     tarefas: novaListaTarefas
    })
  }

  selectTarefa = (id) => {
    console.log('Selec tarefa', id)
    const selecionar = this.state.tarefas.map((item) => {
      if(id === item.id) {
        const novoCompleto = {
          ...item,
          completa: !item.completa
        }
        return novoCompleto
      } else {
        return item
      }
    })
    this.setState({tarefas:selecionar})
  }

  onChangeFilter = (event) => {
  this.setState({
    filtro: event.target.value
  })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
