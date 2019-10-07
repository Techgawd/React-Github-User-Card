import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

componentDidMount(){
  axios.get().then(response => this.setState({smurfs : response.data})).catch(error => console.log(error));
}

reloadUsers = (newUsers) => {
  this.setState({
    users: newUsers
  })
}

render() {
  return (
    <Router>
      <div className = 'App'>
      <div className = 'nav-bar'>
      <NavLink to '/'>Users</NavLink>
      <NavLink to '/user-form'>Add User</NavLink>
      </div>
      <Route exact path = '/' render = {(props) => <Users {...props} users = {this.state.users} />} />
      <Route path = '/user-form' render = {(props) => <UserForm {...props} reloadUsers = {this.reloadUsers} />} />
      </div>
    </Router>
  );
}
}

export default App;
