import React from "react";
import * as C from './StyledPequeno'

export function CardPequeno(props) {
    return (
        <div>
            <C.AreaCardPequeno>
                <C.AreaFlex>
                    <img src={props.email} />
                    <p>{props.tituloEmail} <span>{props.spanEmail}</span></p>
                </C.AreaFlex>
            </C.AreaCardPequeno>
            <C.AreaCardPequeno>
                <C.AreaFlex>
                    <img src={props.local} />
                    <p>{props.tituloLocal} <span>{props.spanLocal}</span></p>
                </C.AreaFlex>
            </C.AreaCardPequeno>
        </div>
    )
}
