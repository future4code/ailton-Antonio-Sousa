import React from 'react'

export const DesafioTres = (props) => {
    const tarefa = props.setTarefas

    const deleteTarefa = (id) => {
        const listDel = props.tarefas.filter((item)=> {
          return item.id !== id
        })
       tarefa(listDel)
    }
  return (
    <div>
        <button onClick={()=> deleteTarefa(props.item.id)}>Deletar</button>
    </div>
  )
}
