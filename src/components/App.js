import React, { Component } from 'react';
import '../App.css';
import router from '../router.js';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      yup!
      <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      { router }
      </div>
    );
  }
}

export default App;
