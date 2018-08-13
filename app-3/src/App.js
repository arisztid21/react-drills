import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();

    this.state={
      filterstring:'',
      array:['1','2','3','4','5']
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(filter){
    this.setState({
      filterstring: filter
    })
  }
  render() {
    const newArr = this.state.array.filter((element,index)=>{
      return element.includes(this.state.filterstring)
    }).map((element,index)=>{return <h2 key={index}>{element}</h2>})
    return (
      <div className="App">
      <input onChange={(event)=>this.handleChange(event.target.value)} type='text'/>
        {newArr}
      </div>
    );
  }
}

export default App;
