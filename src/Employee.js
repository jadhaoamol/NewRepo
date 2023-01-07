import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(){
        super();
        this.state=({
            //name:"Santosh Jadhav"
            name:1
        })
    }
    changeName(){
        this.setState({
           // name:"Amol Jadhao"
           name:this.state.name +1
        })
    }
  
  render() {
    return (
      <div className='App'>
        <h1>{this.state.name}</h1>
      <input type="button" value="Click" onClick={()=>this.changeName()} />
      </div>
    )
  }
}
