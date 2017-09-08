import React, { Component } from 'react';
import { getAll } from '../../services/usersService.js';

export default class Users extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getAll().then(res => {
      this.setState({
        users: res
      })
    })
  }


  render() {

    const users = this.state.users.map((e, i) => {
      return (
        <h3 key={i}>{e.name}</h3>
      )
    })

    return (
      <div>
        <h1>Here are our users!</h1>
        { users }
      </div>
    )
  }

}