import React from "react";
import * as C from './StyledChart'
import { useState } from "react";
import { useEffect } from "react";

export function Chart() {
    const [msg, setMsg] = useState([])
    const [user, setUser] = useState('')
    const [msgUser, setMsgUser] = useState('')

    const onchangeUser = (e) => {
        setUser(e.target.value)
    }
    const onchangeMsgUser = (e) => {
        setMsgUser(e.target.value)
    }

    const newMensagem = {
        user: user,
        mensagem: msgUser
    }
    const newList = [...msg, newMensagem]

    // Essa funçao fuciona com o Enter dentro do input
    const press = (e) => {
        if (e.keyCode === 13) {
            setMsg(newList)
            setMsgUser('')
        }
    }

    const atualizaChart = () => {
        setMsg(newList)
        setMsgUser('')
    }

    const renderiza = msg.map((item) => {
        if (item.user === "Eu") {
            return <C.AreaLeft key={item.user}>{item.user}: {item.mensagem}</C.AreaLeft>
        } else {
            return <C.AreaRight>{item.user}: {item.mensagem}</C.AreaRight>
        }

    })
    return (
        <div>
            <C.AreaFlex>
                <C.AreaChart>
                    {renderiza}
                </C.AreaChart>
            </C.AreaFlex>
            <C.AreaInput>
                {/* <input placeholder="usuário" value={user} onChange={onchangeUser}/> */}
                <select value={user} onChange={onchangeUser}>
                    <option>Anônimo</option>
                    <option value='Eu'>Eu</option>
                    <option value='Meteus'>Mateus</option>
                    <option value='Pedro'>Pedro</option>
                    <option value='Gabriela'>Gabriela</option>
                </select>
                <C.inputMeg  placeholder="Mensagem" value={msgUser} onKeyDown={press} onChange={onchangeMsgUser} />
                <C.inputEnviar type="submit" onClick={atualizaChart} placeholder="Enviar" />
            </C.AreaInput>
        </div>
    )
}