import React, { Component } from 'react';

export default class Users extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div>
        <h1>Here are our users!</h1>
      </div>
    )
  }

}