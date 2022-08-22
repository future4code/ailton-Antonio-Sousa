import React from 'react'

export const OrderSort = (props) => {
  return (
    <div>
        <label>Ordenar por:</label>
        <select value={props.ordernar} onChange={props.onChangeOrder}>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
        </select>
    </div>
  )
}
