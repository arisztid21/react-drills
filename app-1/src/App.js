import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state= {
      message:'',
    }
    this.handleChange= this.handleChange.bind(this);
  }

  handleChange(val){
    this.setState({
      message: val
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={(event)=>this.handleChange(event.target.value)}></input>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
