import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor(){
super();
this.state={
username: '',
password: ''
}
this.handleLogin=this.handleLogin.bind(this);
}
handleUserNameChange(val){
  this.setState({
    username:val,
  })
}
handlePasswordChange(val){
  this.setState({
    password: val
  })
}
handleLogin(){
  alert('Username: ${this.state.username} Password: ${this.state.password}');
}

  render() {
    return (
      <div className="App">
      <input onChange={(event)=> this.handleUserNameChange(event.target.value)}/>
      <input onChange={(event)=> this.handlePasswordChange(event.target.value)}/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
