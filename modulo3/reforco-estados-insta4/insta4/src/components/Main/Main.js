import React from "react";
import Post from "../Post/Post";
import styled from 'styled-components'
import hen from "../../img/henrique.jpeg"
import henri from '../../img/henrique.jpeg'
import { useState } from "react";

export function Main() {
    const [form, setForm] = useState(
        [
          {
            nome: "Paulo",
            foto: "https://picsum.photos/50/50",
            fotoPerfil: "https://picsum.photos/200/150",
          },
          {
            nome: "Henrique",
            foto: hen,
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
        <div>
            <div>
      <div>
      <input placeholder="Nome" value={name} onChange={onChangeName} />
      <label>
        <input placeholder="Link foto perfil" type="url" value={fotoPerfil} onChange={onChangePerfil} />
      </label>
      <label>
        <input placeholder="Link foto do post" type="url" value={foto} onChange={onChangefoto} />
      </label>
      <button onClick={atualizaState}>Enviar</button>
      </div>
      {listaUsers}
    </div>
        </div>
    )
}