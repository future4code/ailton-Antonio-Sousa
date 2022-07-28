import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import henri from './img/henrique.jpeg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const AreaHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #999;
  margin-bottom: 10px;
  width: 100%;
  height: 90px;
  input {
    color: black;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid white;
    background: transparent;
    width: 250px;
  }
  button {
    border: none;
    width: 100px;
  }
`

function App() {
  const [form, setForm] = useState(
    [
      {
        nome: "Paulo",
        foto: "https://picsum.photos/50/50",
        fotoPerfil: "https://picsum.photos/200/150",
      },
      {
        nome: "Henrique",
        foto: henri,
        fotoPerfil: henri,
      },
    ]
  )
  const [name, setName] = useState('')
  const [foto, setFoto] = useState('')
  const [fotoPerfil, setPerfil] = useState('')

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  const onChangePerfil = (event) => {
    setPerfil(event.target.value)
  }
  const onChangefoto = (event) => {
    setFoto(event.target.value)
  }

  const newArray = {
    nome: name,
    foto: foto,
    fotoPerfil: fotoPerfil
  }
  const newList = [newArray, ...form]

  const atualizaState = () => {
    setForm(newList)
    setName("")
    setFoto("")
    setPerfil("")
  }
  const listaUsers = form.map((item) => {
    return <Post nomeUsuario={item.nome} fotoUsuario={item.foto} fotoPost={item.fotoPerfil} />
  })
  return (
    <MainContainer>
      <AreaHeader>
      <input placeholder="Nome" value={name} onChange={onChangeName} />
      <label>
        <input placeholder="Link foto perfil" type="url" value={fotoPerfil} onChange={onChangePerfil} />
      </label>
      <label>
        <input placeholder="Link foto do post" type="url" value={foto} onChange={onChangefoto} />
      </label>
      <button onClick={atualizaState}>Enviar</button>
      </AreaHeader>
      {listaUsers}
    </MainContainer>
  );
}

export default App;
