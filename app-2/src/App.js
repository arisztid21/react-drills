import React, { Component } from 'react';

import './App.css';

class App extends Component {

constructor(){
  super();

  this.state ={
    array:['1','2','3','4','5'],

  }
}


  render() {
   const newArr= this.state.array.map(element=>{
     return <h2>{element}</h2>
   })
    return (
      <div className="App">
        {newArr}
      </div>
    );
  }
}

export default App;
