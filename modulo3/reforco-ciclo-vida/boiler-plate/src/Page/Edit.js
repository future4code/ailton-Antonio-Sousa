import React, { useEffect } from 'react'

export const Edit = (props) => {
    const msgEdit = props.edit
    const tarefa = props.setTarefas
    const setEdit=   props.setEdit

    const onChangeEdit = (id) => {
        const editar = props.tarefas.filter((item) => {
            if(item.id === id) {
           return item.texto = msgEdit 
            }
            return item
        })
        tarefa(editar)
    }


    return (
        <div>
            <input value={props.edit.id} onChange={props.onChangeEdit} />
            <button onClick={()=> onChangeEdit(props.item.id)}>Editar</button>
        </div>
    )
}
