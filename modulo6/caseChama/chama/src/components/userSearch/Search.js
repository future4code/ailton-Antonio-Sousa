import axios from 'axios'
import React, { useState } from 'react'
import * as C from './styles'
import Card from '../userCard/Card'


const Search = () => {

    const [input, setInput] = useState('')
    const [listaTexto, setListaTexto] = useState([])
    const [users, setUsers] = useState()
    
    const handleSUbmit = () => {
        axios.get(`https://api.github.com/users/${input}`)
            .then((res) => {
                setUsers(res.data)
            })

        const newArray = [...listaTexto, input]
        setListaTexto(newArray)
        setInput('')
    }

    const testeInput = (item) => {
        setInput(item)
    }
    return (
        <C.Container>
            <C.ContainerInput>
                <C.Title>Buscador de perfil GitHub</C.Title>
                <input type={'text'}
                    placeholder="Buscar usuário"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button onClick={handleSUbmit}>Buscar</button>
                <C.History>
                    <C.Title>Histórico</C.Title>
                    {listaTexto && listaTexto.map((item, index) => {
                        return <button key={index} onClick={() => testeInput(item)}>{item}</button>

                    })}
                </C.History>
            </C.ContainerInput>
            <Card users={users} />
        </C.Container>
    )
}

export default Search