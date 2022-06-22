import React, { Component } from 'react'

export default class TelaDetalheUser extends Component {
  render() {
    return (
    <div>
        TelaDetalheUser
        <p>o nome {this.props.infor.name}</p>
        <p>o email {this.props.infor.email}</p>
    </div>

    )
  }
}
