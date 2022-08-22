import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./styles.css"
import { DesafioTres } from "./Page/DesafioTres";
import { OrderSort } from "./Page/OrderSort";
import { Edit } from "./Page/Edit";


const TarefaList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  width: 300px;
`;

const Tarefa = styled.li`
  text-align: left;
  flex: 1;
  margin-bottom: 10px;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;
const AreaFlex = styled.div`
display: flex;
button {
  height: 20px;
}
`

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: Date.now(), // Explicação abaixo
      texto: 'Texto da tarefa',
      completa: false // Indica se a tarefa está completa (true ou false)
    },
    {
      id: Date.now(), // Explicação abaixo
      texto: 'Texto da segunda tarefa',
      completa: true // Indica se a tarefa está completa (true ou false)
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");
  const [search, setSearch] = useState("")
  const [ordernar, setOrdenar] = useState("crescente")
  const [edit, setEdit] = useState("")

  // useEffect(() => {
  //   const listaDoLocal = JSON.stringify(tarefas)
  //   localStorage.setItem("tarefas", listaDoLocal)

    
  // }, []);

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  };

  const body = {
    id: Date.now(),
    texto: inputValue,
    completa: false
  }
  const newTarefa = [...tarefas, body]

  const criaTarefa = () => {
    setTarefas(newTarefa)
    setInputValue("")
  };
  const selectTarefa = (id) => {
    const novaLista = tarefas.map((item, index) => {
      if (item.id === id) {
        item.completa = !item.completa
      }
      return item
    })
    setTarefas(novaLista)
  };

  const onChangeFilter = (event) => {
    setFiltro(event.target.value)
  };

  const onChangeSerach = (event) => {
    setSearch(event.target.value)
  }

  const onChangeOrder = (event) => {
    setOrdenar(event.target.value)
  }

  const onChangeEdit =(event) => {
    setEdit(event.target.value)
  }

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input placeholder="Buscar" value={search} onChange={onChangeSerach} />
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
        <OrderSort ordernar={ordernar} onChangeOrder={onChangeOrder} />
      </InputsContainer>

      <TarefaList>
        {listaFiltrada
          .filter((item) => {
            const textoLower = item.texto.toLowerCase()
            return textoLower.includes(search)
          })
          .sort((a, b) => {
            switch (ordernar) {
              case "crescente":
                return a.texto > b.texto ? 1 : -1
              case "decrescente":
                return b.texto > a.texto ? 1 : -1
            }
          })
          .map((tarefa) => {
            return (
              <AreaFlex>

                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                
                <DesafioTres item={tarefa} setTarefas={setTarefas} tarefas={tarefas} />

                <Edit item={tarefa} tarefas={tarefas} setTarefas={setTarefas} edit={edit} setEdit={setEdit} onChangeEdit={onChangeEdit}/>
              </AreaFlex>
            );
          })}

      </TarefaList>
    </div>
  );
}

export default App;
