import React from 'react'
import styled from 'styled-components'

const IconContainerSalvo = styled.div`
	display: flex;
`
const IconImageSalvo = styled.img`
	margin-right: 5px;
`
export function IconeSalvo(props) {
    return (
        <IconContainerSalvo>
            <IconImageSalvo src={props.icone} onClick={props.onClickSalvo}>
            
            </IconImageSalvo>
        </IconContainerSalvo>

    )
}