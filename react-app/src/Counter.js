import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    handleincrement=()=>{
        console.log(this);
        this.setState(prevState=>{
            return{
                count: prevState.count+1
            }
        })
    }
    handledecrement=()=>{
        this.setState(prevState=>{
            return{count:prevState.count-1}
        })
    }
    handlereset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div>
        {this.state.count}<br></br>
        <button onClick={this.handleincrement}>+</button>
        <button onClick={this.handledecrement}>-</button>
        <button onClick={this.handlereset}>Reset</button>
      </div>
    )
  }
}
