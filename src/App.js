import React from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Graph'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      firstNum:null,
      secNum:null,
    }
  }
  handleChange=(e)=>{
    let {name, value}= e.target
    this.setState({
      [name]:value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      total:322
    })
  }
  render(){
    return(
      <div>
        <form>
          <input onChange={this.handleChange} value={this.state.firstNum} name='firstNum' type="text" pattern='[0-9]*'/>
          <input onChange={this.handleChange} value={this.state.secNum} name='secNum' type="text" pattern='[0-9]*' />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
        {
          this.state.total !== undefined ? <Graph total={this.state.total} first={this.state.firstNum} second={this.state.secNum}/> :null
        }
        
      </div>
    )

  }
}

export default App;
